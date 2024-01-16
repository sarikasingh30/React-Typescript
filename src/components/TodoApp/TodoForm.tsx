import React, { ChangeEvent, FormEvent, useState } from "react";


interface TodoFormProps{
  addTodo: AddTodo,
}
export const TodoForm:React.FC<TodoFormProps>=({addTodo})=>{
  const [data,setData]=useState<string>("")
  const handleSubmit=(e:FormEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    addTodo(data)
    setData("")
  }
  return <>
 
  <form style={{textAlign:"center", margin:"auto"}}>
  <input style={{border:"4px solid #243e36",margin:"1%", padding:"1%"}} type="text" placeholder="Enter the Task" value={data} onChange={(e:ChangeEvent<HTMLInputElement>)=>setData(e.target.value)}/>
  <button  style={{border:"4px solid #243e36",margin:"1%", padding:"1%"}} onClick={handleSubmit}>Add Todo</button>
  </form>
  </>

}