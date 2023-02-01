import { Task } from "../App";
import { DeleteTaskButton } from "./DeleteTaskButton";

const TaskList = ({ tasks, setTasks }: any) => {
  return (
    <div className="task__list">
      {tasks.map((task: Task) => (
        <div className="task__item" key={task.id}>
          <div className="task__upper-wraper">
            <img
              src="https://picsum.photos/400/400"
              alt="task picture"
              className="task__picture"
            />
            <h3 className="task__title">{task.title}</h3>
          </div>
          <div className="task__bottom-wrapper">
            <p className="task__description">{task.description}</p>
          </div>
          <div className="task__button-wrapper">
            <div className="task__button">
              <button className="button button__task">Edit</button>
            </div>
            <DeleteTaskButton id={task.id} setTasks={setTasks} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
