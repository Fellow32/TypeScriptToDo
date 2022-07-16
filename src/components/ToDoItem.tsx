import {ITodo} from '../types/data'

interface ITodoItem extends ITodo {
    removeToDo : (id:number) => void;
    toggleToDo : (id:number) => void;
}


const ToDoItem:React.FC<ITodoItem> = (props) => {

    const {id,title,complete,removeToDo,toggleToDo} = props

    return (
        <div>
       <input type="checkbox" checked={complete}  onChange={() => toggleToDo(id)}/>
       {title}
       <button
        style ={{
            background:'transparent',
            border:'none',
            outline:'none',
            color:'red',
            fontSize:'20px',
            cursor:'pointer'

        }}
        onClick={() => removeToDo(id)}>x</button>
        </div>
    )
}



export default ToDoItem