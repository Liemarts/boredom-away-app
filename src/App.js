import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [myAdvice, setMyAdvice] = useState ("");

  useEffect (()=> {
    getAdvice();
  }, [])

  const getAdvice = async ()=> {
    const response = await fetch ('https://www.boredapi.com/api/activity/');
    const data = await response.json();
    setMyAdvice (data.activity);
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>There's no time to be bored!</h1>
      </div>

      <div className='container'>
        <h2>{myAdvice}</h2>
      </div>

      <div className='container'>
        <button onClick={getAdvice}>Just try!</button>
      </div>
    </div>
  );
}

export default App;
