import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Loading from './components/Loading'
import TaskList from './components/TaskList'

interface Task {
  id: number,
  description: string,
  isDone: boolean
}


function App() {
  const [tasks, setTasks] = useState<Task[] | null>(null)

  useEffect(() => {
    axios.get<Task[]>('http://localhost:3004/tasks').then(({data}) => {
      setTasks(data)
      console.table(data)
    })
  }, []);//[] only one time runs on page load

  
  
  return (
    <div className="App">
      {tasks ? <TaskList tasks={tasks} />:<Loading />}
     
      <AddTask />
    </div>
  )
  
}

export default App
export type { Task }
function AddTask() {
  return (
    <div className='addTask__wrapper'>
      <form className='addTask__form'>
        <h3 className='addTask__heading'>add new task</h3>
        <input className='addTask__input'/>
        <button
          className='button button__addTask'
          type='submit'
        >
          add
        </button>
      </form>
    </div>
  )
}



//  function TaskList({tasks}):Task[] {
//   tasks.map((task:Task) => {
//      return (
//        <div>
//          <p>{task.description}</p>
//        </div>
//      )
//    }) 

//  }



