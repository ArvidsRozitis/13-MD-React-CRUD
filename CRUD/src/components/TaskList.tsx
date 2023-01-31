import { Task } from "../App";

const TaskList = ({tasks}: any ) => {  
    return (
        <div className="todo__list">
            {tasks?.map((task:Task) =>(
            <div className='task__item'>{task.description}</div>                
            ))}
        </div>
) 
}

export default TaskList;