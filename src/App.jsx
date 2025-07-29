import React,{ useState } from 'react'
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList"

const App = () => {
  const [tasks,setTasks] = useState([]);
  const addTask = (task) => {
       setTasks([...tasks,task])
  }
  
  const deleteTask = (indexToDelete) => {
    const filteredTasks = tasks.filter((_,index) => index !== indexToDelete);
    setTasks(filteredTasks);
  }

  return (
    <>
    <div className='min-h-screen bg-gray-700 flex flex-col items-center py-10 px-4'>
      <h1 className='text-4xl font-bold mb-6 text-blue-600'>My To-Do App</h1>
    <AddTaskForm onAdd={addTask}/>
    <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
    </>
  )
}

export default App