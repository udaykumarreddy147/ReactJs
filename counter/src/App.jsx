import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(15)

  function addValue()
  {
      counter+=1;
      setCounter(counter);
  }

  function removeValue()
  {

    counter-=1;
    setCounter(counter);
  }

  return (
    <>
      <h1>New Project</h1>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue}>add value</button>
      <br/> <br/>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
