import { useCallback, useEffect, useRef, useState } from "react"
function App() {

  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false); 
  const [password, setPassword] = useState("")

// callBack is used to store the data in cache memory 
// it is used for optimization
// [length,charAllowed,numberAllowed,setPassword]) => dependies

  const passwordGenerator = useCallback(() =>{

    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass=""

    if(numberAllowed)
    {
      str+="0123456789"
    }
    if(charAllowed)
    {
      str+="~!@#$%^&*(){}[]"
    }

    for(let i=0;i<length;i++)
    {
        let char = Math.floor(Math.random() * str.length +1)
        pass +=str.charAt(char)
    }

    setPassword(pass)


  },[length,charAllowed,numberAllowed,setPassword])


  // 1st page reload => useEffect function is called it means passwordGenerator() will execute
  // if any chnages in [length,numberAllowed,charAllowed,passwordGenerator] 
  // then the useEffect function will re-execute

  useEffect(()=>
  {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator]
  )

  // this function is used to copy the password into the clipBoard using UseRef hooks

  const copyPasswordToClipBoard = useCallback(()=>
  {
    passwordRef.current?.select();   
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)  //copy to clipBoard
  },[password])

  //  useRef Hook

  const passwordRef = useRef(null)


  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-4xl text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input className="outline-none  overflow-hidden w-full px-2 h-11"
            type="text"
            ref={passwordRef}
            value={password}
            placeholder="Password"
            readOnly />

            <button  onClick={copyPasswordToClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        
        <div className='flex text-lg gap-x-6'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
              <input 
                type="checkbox" 
                defaultChecked={numberAllowed}
                onChange={()=>{setNumberAllowed((prev) => !prev)}}
              />
              <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                      setCharAllowed((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
