import { useEffect, useRef, useState } from "react"
import { ITodo } from "../types/data"
import ToDoList from "./ToDoList"



const App: React.FC = () => {

const [value,setValue] = useState('')


const [todos,setTodos] = useState <ITodo[]>([])



const inputRef = useRef <HTMLInputElement>(null)

const handleChange : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
}

const handleKeyDown : React.KeyboardEventHandler<HTMLInputElement>  = (e) => {

    if (e.key === 'Enter') {
        addTodo()
    }
    
}

const addTodo = () => {
       if ( value ) {
          
    setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete : false
    }])

    setValue('')
      
       }

}

const removeTodo = (id:number):void => {
     setTodos(todos.filter(el => el.id !== id))
}

const toggleToDo = (id: number):void => {
    setTodos(todos.map(el => {
          if (el.id !== id) return el;
            return {
                ...el,
                complete:!el.complete
            }
           
    } ))
       
    
}


useEffect( () => {
     inputRef.current?.focus()
},[])



    
    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            marginTop:'150px'
            
        }}>
           <div>
            <input onKeyDown={handleKeyDown} ref={inputRef} value={value} onChange={handleChange} type="text" />
            <button 
              style={{
                cursor:'pointer',
              }}
              onClick={addTodo}> Add ToDo</button>
           </div>

             <ToDoList
              items={todos}
              removeToDo ={removeTodo}
              toggleToDo = {toggleToDo}
              
             />
        </div>
    )
}



export default App