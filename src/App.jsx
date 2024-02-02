import React, { useState } from "react"
import StopWatch from "./StopWatch";


function App() {
  
  let Time= new Date().toLocaleTimeString();

  const [ctime,setCtime] = useState(Time);
  const UpdateTime =()=>{
    let Time= new Date().toLocaleTimeString();
    setCtime(Time)
  }
  setInterval(UpdateTime,1000)
  return (
    <>
    <h1 className="text-2xl text-center">Digital Clock</h1>
    <div className=" mt-28 border w-48 h-12 ml-96 bg-slate-900 " >
    <h1 className=" text-white text-2xl text-center align-middle ">{ctime}</h1>
    </div>
    <StopWatch/>
    </>
  )
}

export default App
