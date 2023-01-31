import axios from 'axios'
import uuid from 'react-uuid'
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
  useEffect(() => {
    axios.get<Task[]>('http://localhost:3004/tasks').then(({data}) => {
      setTasks(data)
      console.table(data)
    })
  }, []);//[] only one time runs on page load
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [inputValue, setInputValue] = useState<string>('')

  const addTaskHandler = () => {
    console.log('kosmos')
    const newTask = {
      id: uuid(),
      description: inputValue,
      isDone: false
    }
    axios.post<Task>(`http://localhost:3004/tasks`, newTask).then(() => {
      console.log('notika'); 
      setInputValue('')
      axios.get<Task[]>('http://localhost:3004/tasks').then(({data}) => {
        setTasks(data)
      })
    });
  }



 

  
  
  return (
    <div className="App">
      {tasks ? <TaskList tasks={tasks} />:<Loading />}
      
     
      <form className='addTask__form' onSubmit={(e) => {
           e.preventDefault()
        }}>
        <h3 className='addTask__heading'>add new task</h3>
        <input
          type="text"
          className='addTask__input'
          placeholder='taks description'
          value={inputValue}
          onChange={(e)=> {             
            e.preventDefault()
            console.log(inputValue)
            setInputValue(e.target.value)
          }}
        />
        <button
          className='button button__addTask'
          onClick={addTaskHandler}
        >
          add
        </button>
      </form>


    </div>
  )
}

export default App
export type { Task }

// function AddTask() {
//     return (
//         <form className='addTask__form' onSubmit={(e) => {
//            e.preventDefault()
//         }}>
//           <h3 className='addTask__heading'>add new task</h3>
//           <input
//             type="text"
            
//             className='addTask__input'
//             placeholder='taks title'
//             value={inputValue}
//             onChange={(e)=> {             
//               e.preventDefault()
//               console.log(inputValue)
//               setInputValue(e.target.value)
//             }}
//           />
//           <button
//             className='button button__addTask'
//           >
//             add
//           </button>
//         </form>
//     )
//   }





