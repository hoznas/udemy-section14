import React,{useRef} from 'react'


const NewTodo: React.FC = ()=>{
    const textInputRef = useRef<HTMLInputElement>(null)

    const todoSubmitHandler = (event:React.FormEvent)=>{
        event.preventDefault();
        const enterdText = textInputRef.current!.value
        console.log(enterdText)
    }

    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor='todo-text'>TodoContents</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">add Todo</button>
        </form>
    )
}

export default NewTodo
