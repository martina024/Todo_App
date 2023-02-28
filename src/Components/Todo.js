import React , {useState} from 'react'
import "./Todo.css"
import { TransitionGroup ,CSSTransition } from 'react-transition-group'

const Todo = ({toggleTodo,task,completed,id,removeTodo,updateTodo}) => {
    const [isEditing ,setIsEditing]=useState(false)
    const [edittask,setEdittask]=useState(task)


    const handelUpdate=(e)=>{
        e.preventDefault()
        updateTodo(id,edittask);
        setIsEditing(false)
    }

  return (
    <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
        {isEditing ?(
            <CSSTransition key="editing" timeout={500} classNames="form">
                <form className='Todo-edit-form' onSubmit={handelUpdate}>
                <input
                type="text"
                name='task'
                value={edittask}
                onChange={(e)=>setEdittask(e.target.value)} />
                <button>Save</button>
                </form>
               
            </CSSTransition>
        ):(
            <CSSTransition key="normal" timeout={500} classNames="task-text">
            <li className='Todo-task' onClick={toggleTodo}>
                {task}
            </li>
        </CSSTransition>

        )}
        
        <div className='Todo-buttons'>
        <button onClick={()=>setIsEditing(true)}>
                <i className='fas fa-pen'></i>
            </button>
            <button onClick={removeTodo}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    </TransitionGroup>
  )
}

export default Todo
