import {useState} from "react"
import "./Todoinput.css"

const Todoinput=({creteTodo})=>{
    const [task,setTask]=useState("")
    const handelSubmit=(e)=>{
        e.preventDefault()
        creteTodo(task)
        setTask("")
    }
    return (
        <form className="TodoInput" onSubmit={handelSubmit}>
            <input 
            typr="text"
            placeholder="Enter task"
            id="task"
            name="task"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />

            <button>Add Todo</button>
                
        </form>
    )
}
export {Todoinput}