import { useState } from "react";
import { Task } from "../../App";
import axios from "axios";
import uuid from "react-uuid";

const AddTaskForm = ({ setTasks }: any) => {
  const [taskTitle, setTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");

  const addTaskHandler = () => {
    const newTask = {
      id: uuid(),
      title: taskTitle,
      description: taskDescription,
      isDone: false,
    };
    axios.post<Task>(`http://localhost:3004/tasks`, newTask).then(() => {
      console.log("add notika");
      setTitle("");
      setTaskDescription("");
      axios.get<Task[]>("http://localhost:3004/tasks").then(({ data }) => {
        setTasks(data);
      });
    });
  };
  return (
    <form
      className="addTask__form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h3 className="addTask__heading">Add new Task</h3>
      <label className="addTask__label">
        Task title
        <input
          required
          type="text"
          className="addTask__input"
          placeholder="Task title"
          value={taskTitle}
          onChange={(e) => {
            e.preventDefault();
            console.log(taskTitle);
            setTitle(e.target.value);
          }}
        />
      </label>
      <label className="addTask__label">
        Task description
        <input
          required
          type="text"
          className="addTask__input"
          placeholder="Task description"
          value={taskDescription}
          onChange={(e) => {
            e.preventDefault();
            console.log(taskDescription);
            setTaskDescription(e.target.value);
          }}
        />
      </label>
      <button className="button button__addTask" onClick={addTaskHandler}>
        add
      </button>
    </form>
  );
};

export default AddTaskForm;