import { useState } from "react";
import { EditTaskButton } from "./EditTaskButton/EditTaskButton";
import { DeleteTaskButton } from "./DeleteTaskButton/DeleteTaskButton";
import { TaskEditForm } from "./TaskEditForm/TaskEditForm";

export const TaskItem = ({ task, index, setTasks }: any) => {
  const [editIsVisible, setEditIsVisible] = useState(false);
  const editTaskHandler = () => {
    setEditIsVisible(!editIsVisible);
    console.log(editIsVisible);
  };
  return (
    <div className="task__item--container">
      <div className="task__item">
        <div className="task__upper-wraper">
          <img
            src={`https://picsum.photos/id/${index}/200/300`}
            alt="task picture"
            className="task__picture"
          />
          <h3 className="task__title">{task.title}</h3>
        </div>
        <div className="task__bottom-wrapper">
          <p className="task__description">{task.description}</p>
        </div>
        <div className="task__button-wrapper">
          <EditTaskButton editTaskHandler={editTaskHandler} />
          <DeleteTaskButton id={task.id} setTasks={setTasks} />
        </div>
      </div>
      {editIsVisible ? (
        <TaskEditForm
          taskId={task.id}
          taskTitle={task.title}
          taskDescription={task.description}
          setTasks={setTasks}
          index={index}
        />
      ) : null}
    </div>
  );
};

export default TaskItem;
