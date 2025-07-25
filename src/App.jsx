import { useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1 className="text-3xl font-bold text-blue-500">Hello Tailwind</h1>
<AddTaskForm/>
    </>
  )
}

export default App
