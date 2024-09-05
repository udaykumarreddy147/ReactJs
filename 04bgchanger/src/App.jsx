import { useState } from "react"


function App() {

    const [color,setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}> 
        <div className="fixed bottom-12 w-full p-2 shadow-lg insetx-0 gap-5 flex flex-wrap justify-center" 
        style={{backgroundColor:"white"}}>
          <button className="text-white p-2 rounded-2xl" style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>red</button>
          <button className="text-white p-2 rounded-2xl" style={{backgroundColor:"green"}} onClick={()=> setColor("green")}>green</button>
          <button className="text-white p-2 rounded-2xl" style={{backgroundColor:"olive"}} onClick={()=> setColor("olive")}>olive</button>
          <button className="text-black p-2  rounded-2xl" style={{backgroundColor:"yellow"}} onClick={()=> setColor("yellow")}>yellow</button>
          <button className="text-white p-2 rounded-2xl" style={{backgroundColor:"blue"}} onClick={()=> setColor("blue")}>blue</button>
          <button className="text-white p-2 rounded-2xl" style={{backgroundColor:"black"}} onClick={()=> setColor("black")}>black</button>
          <button className="text-black p-2 rounded-2xl" style={{backgroundColor:"pink"}} onClick={()=> setColor("pink")}>pink</button>
          <button className="text-white p-2 rounded-2xl" style={{backgroundColor:"gray"}} onClick={()=> setColor("gray")}>gray</button>
          <button className="text-white p-2 rounded-2xl" style={{backgroundColor:"purple"}} onClick={()=> setColor("purple")}>purple</button>
          
        </div>
    </div>
    </>
  )
}

export default App
