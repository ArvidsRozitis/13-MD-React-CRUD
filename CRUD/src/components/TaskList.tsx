import uuid from 'react-uuid';
import { Task } from "../App";

const TaskList = ({tasks}: any ) => {  
    return (
        <div className="todo__list">
            {tasks?.map((task:Task) =>(
            <div className='task__item' key={task.id}>{task.description}</div>                
            ))}
        </div>
    ) 
}

export default TaskList;