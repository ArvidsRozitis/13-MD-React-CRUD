import axios from "axios";
import uuid from "react-uuid";
import { useState, useEffect } from "react";
import "./App.css";
import "./assets/styles/reset.css";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

interface Task {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: uuid(), title: "test", description: "test", isDone: false },
  ]);
  useEffect(() => {
    axios.get<Task[]>("http://localhost:3004/tasks").then(({ data }) => {
      setTasks(data);
      console.table(data);
    });
  }, []); //[] only one time runs on page load

  return (
    <div className="App">
      <AddTaskForm setTasks={setTasks} taskCount={tasks.length} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
export type { Task };
