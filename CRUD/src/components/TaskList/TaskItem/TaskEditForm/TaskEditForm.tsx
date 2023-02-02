//<React.fc.Task[]>
import { useState } from "react";
import axios from "axios";
import { Task } from "../../../../App";
export const TaskEditForm = ({ taskId, taskTitle, taskDescription, setTasks, index }: any) => {
  const [newTaskTitle, setnewTaskTitle] = useState<string>(taskTitle);
  const [newTaskDescription, setNewTaskDescription] = useState<string>(taskDescription)

  const updateTaskHandler = () => {
    axios.put<Task>(`http://localhost:3004/tasks/${taskId}`,{
      title: newTaskTitle,
      description: newTaskDescription,
    }).then(() => {
      console.log("update notika");
      setnewTaskTitle(newTaskTitle);
      setNewTaskDescription(newTaskDescription);
      axios.get<Task[]>("http://localhost:3004/tasks").then(({ data }) => {
        setTasks(data);
      });
    });
  };
    return (
      <form 
        className="taskEdit__form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <img
          src={`https://picsum.photos/id/${index}/200/300`}
          alt="task picture"
          className="task__picture"
        />
        <label className="editTask__label">
          edit title
          <input
            className="taskEdit__inputfield taskEdit__inputfield--title"
            value={newTaskTitle}
            onChange={(e) => {
              
              console.log(taskTitle);
              setnewTaskTitle(e.target.value);
            }}
          />
        </label>
        <label className="editTask__label">
          edit description
          <input
            className="taskEdit__inputfield taskEdit__inputfield--description"
            value={newTaskDescription}
            onChange={(e) => {
              e.preventDefault();
              console.log(taskDescription);
              setNewTaskDescription(e.target.value);
            }}
          />
        </label>
        <div>
          <button className="button" onClick={updateTaskHandler}>
            update
          </button>
        </div>
      </form>
    );
  };

export default TaskEditForm