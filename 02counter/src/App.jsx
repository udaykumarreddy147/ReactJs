import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(15)

  function addValue()
  {
      counter+=1;

      // 1
      // if previous counter value  is equal to current counter value then the 
        // current counter value is to be incremented by 1

        // previous =15 current = 16
        // both are not equal 
        // counter = 16
      setCounter(preCounter => preCounter + 1 );

        // previous =16 current = 16
        // both are  equal 
        // counter = 17
      setCounter(preCounter => preCounter + 1 );
         
        // previous =17 current = 17
        // both are  equal 
        // counter = 18
      setCounter(preCounter => preCounter + 1 );

        // previous =18 current = 18
        // both are  equal 
        // counter = 19
      setCounter(preCounter => preCounter + 1 );


      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)

      // the output is = 15+1 => 16 because
      // the same method is repeating every time and the output for 
      // every method is same so the final output is updated at once 
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
