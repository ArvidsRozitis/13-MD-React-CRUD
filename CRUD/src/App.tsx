import axios from "axios";
import uuid from "react-uuid";
import { useState, useEffect } from "react";
import "./App.css";
import "./assets/styles/reset.css";
import TaskList from "./components/TaskList/TaskList";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";

interface Task {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

function App() {
  const [loading, setLoading] = useState(true)
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios.get<Task[]>("http://localhost:3004/tasks").then(({ data }) => {
      setTasks(data);
      setLoading(false)
    });
  }, []); //[] only one time runs on page load


  const addTaskHandler = (title: string, description: string ) => {
    const newTask = {
      id: uuid(),
      title,
      description,
      isDone: false,
    };

    setLoading(true)

    axios.post<Task>(`http://localhost:3004/tasks`, newTask).then(() => {
      setTasks([...tasks, newTask])
      setLoading(false)

    });
  };

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <AddTaskForm
        onSubmit={(title, description) => {
          addTaskHandler(title, description)

      }}/>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
export type { Task };
