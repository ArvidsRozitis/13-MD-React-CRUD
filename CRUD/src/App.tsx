import axios from 'axios'
import uuid from 'react-uuid'
import { useState, useEffect } from 'react'
import './App.css'
import './assets/styles/reset.css'
import Loading from './components/Loading'
import TaskList from './components/TaskList'
import AddTaskForm from './components/AddTaskForm'


interface Task {
  id: number,
  title: string
  description: string,
  isDone: boolean
}


function App() {
  useEffect(() => {
    axios.get<Task[]>('http://localhost:3004/tasks').then(({data}) => {
      setTasks(data)
      console.table(data)
    })
  }, []);//[] only one time runs on page load
  const [tasks, setTasks] = useState<Task[] | null>(null);
  // const [inputValue, setInputValue] = useState<string>('')

  // const addTaskHandler = () => {
  //   const newTask = {
  //     id: uuid(),
  //     description: inputValue,
  //     isDone: false
  //   }
  //   axios.post<Task>(`http://localhost:3004/tasks`, newTask).then(() => {
  //     console.log('notika'); 
  //     setInputValue('')
  //     axios.get<Task[]>('http://localhost:3004/tasks').then(({data}) => {
  //       setTasks(data)
  //     })
  //   });
  // } 
  
  return (
    <div className="App">
      <AddTaskForm setTasks={setTasks} />
      {tasks ? <TaskList tasks={tasks} />:<Loading />}
    </div>
  )
}

export default App
export type { Task }





