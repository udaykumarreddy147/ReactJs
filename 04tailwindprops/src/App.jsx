import './App.css'
import Card from './components/card'

function App() 
{


  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-3'>Tailwind css</h1>
      <br />  
      <Card username='sona' btnText='visit me' />  
      <Card username='lisa' btnText='click me' />
      <Card />
    </>
  )
}

export default App
