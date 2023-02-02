import { useState, useEffect } from "react";
import { Task } from "../../App";
import{TaskItem} from'./TaskItem/TaskItem'


const TaskList = ({ tasks, setTasks }: any) => {
  return (
    <div className="task__list">
      {tasks.map((task: Task, index: number) => (
        <TaskItem task={task} index={index} setTasks={setTasks} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
//---------------------------te ir errors




