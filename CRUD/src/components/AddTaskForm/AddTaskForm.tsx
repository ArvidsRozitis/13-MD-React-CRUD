import { useState } from "react";
import { Task } from "../../App";
import axios from "axios";
import uuid from "react-uuid";

type AddTasksFormProps = {
  onSubmit: (title: string, description: string) => void
}

const AddTaskForm = ({ onSubmit }: AddTasksFormProps) => {
  const [taskTitle, setTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");



  return (
    <form
      className="addTask__form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(taskTitle, taskDescription)
        setTitle('')
        setTaskDescription('')
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
      <button className="button button__addTask">
        add
      </button>
    </form>
  );
};

export default AddTaskForm;