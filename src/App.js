import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0)

  async function fetchAdvice() {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      console.log(data);
      setAdvice(data.slip.advice); // ovde čuvamo savet u state
    } catch {
      console.log('error');
      throw new Error('Failed to fetch advice');
    }
    setCount(count + 1)
  }

  useEffect(() => {

    fetchAdvice()

  }, [])
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={fetchAdvice}>Click me</button>
      <Message count={count} />
<Testing />
    </div>
  );
}


function Message({count}) {
  return <p>You have read in total <strong>{count}</strong> advices </p>

}

function Testing() {
  return <h1>Testing Git</h1>
}

export default App;
