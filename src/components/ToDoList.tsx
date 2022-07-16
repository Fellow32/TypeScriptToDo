

import { ITodo } from "../types/data"
import ToDoItem from "./ToDoItem";

interface ITodoListProps {
    items:ITodo[];
    removeToDo:(id:number) => void;
    toggleToDo:(id:number) => void;
    
}





const ToDoList:React.FC<ITodoListProps> = (props) => {


   const {items,removeToDo,toggleToDo} = props


    return (
       <div>
         
            {
                items.map(el => (
               <ToDoItem
                  key = {el.id}
                  removeToDo={removeToDo}
                  toggleToDo={toggleToDo}
                  {...el}
                  />
                ))
            }
         
       </div>
    )
}




export default ToDoList