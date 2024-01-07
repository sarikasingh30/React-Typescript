import React, { useState } from 'react'

export const Counter: React.FC = () => {
    const [count,setCount] =useState<number>(0)
  return (
    <div style={{height:"30vh",padding:"3%"}}>
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>
        <div>
            <button style={{border:"4px solid blue",margin:"1%", padding:"1%"}} onClick={()=>setCount(count+1)}>Increment</button>
            <button style={{border:"4px solid blue",margin:"1%", padding:"1%"}} onClick={()=>count>0?setCount(count-1):""}>Decrement</button>
            <button style={{border:"4px solid blue",margin:"1%", padding:"1%"}} onClick={()=>setCount(0)}>Reset</button>
        </div>
    </div>
  )
}
