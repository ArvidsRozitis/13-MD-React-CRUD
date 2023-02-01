import { Task } from "../App";

const TaskList = ({tasks}: any ) => {  
    return (
        <div className="task__list">
            {tasks?.map((task:Task) =>(
            <div className='task__item' key={task.id}>
                <div className="task__upper-wraper">
                    <img src="https://picsum.photos//400/400" alt="task picture" className="task__picture"/>
                    <h3 className="task__title">{task.title}</h3>
                </div>
                <div className="task__bottom-wrapper">
                <p className="task__description">
                    {task.description}
                </p>
                </div>
                <div className="task__button-wrapper">
                    <div className="task__button">
                        <button className="button button__task">
                            Edit
                        </button>
                    </div>
                    <div className="task__button">
                        <button className="button button__task">
                            Delete
                        </button>
                    </div>
                </div>
            </div>                
            ))}
        </div>
    ) 
}

export default TaskList;