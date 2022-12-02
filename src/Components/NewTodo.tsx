import React,{useRef} from 'react'
import './NewTodo.css'

type NewTodoProps = {
    onAddTodo: (todoText:string) => void
}

const NewTodo: React.FC<NewTodoProps> = props=>{
    const textInputRef = useRef<HTMLInputElement>(null)

    const todoSubmitHandler = (event:React.FormEvent)=>{
        event.preventDefault();
        const enterdText = textInputRef.current!.value
        props.onAddTodo(enterdText)
        
    }

    return (
        <form onSubmit={todoSubmitHandler}>
            <div className="form-controll">
                <label htmlFor='todo-text'>TodoContents</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">add Todo</button>
        </form>
    )
}

export default NewTodo
