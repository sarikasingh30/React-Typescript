import React, { useState } from 'react'

export const Counter: React.FC = () => {
    const [count,setCount] =useState<number>(0)
  return (
    <div style={{height:"30vh",padding:"3%", width:"40%",backgroundColor:"#243e36", boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"}}>
        <h1 style={{color:"white"}}>Counter App</h1>
        <h2  style={{color:"white"}}>Count: {count}</h2>
        <div>
            <button style={{border:"4px solid #f1f7ed",margin:"1%", padding:"1%", color:"white"}} onClick={()=>setCount(count+1)}>Increment</button>
            <button style={{border:"4px solid #f1f7ed",margin:"1%", padding:"1%", color:"white"}} onClick={()=>count>0?setCount(count-1):""}>Decrement</button>
            <button style={{border:"4px solid #f1f7ed",margin:"1%", padding:"1%", color:"white"}} onClick={()=>setCount(0)}>Reset</button>
        </div>
    </div>
  )
}
