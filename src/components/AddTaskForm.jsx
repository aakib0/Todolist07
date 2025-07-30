import React, { useState} from 'react'

const AddTaskForm = ({ onAdd }) => {
  const [input,setInput] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(input.trim() === "") return;
    onAdd(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-4 mb-6'>
      <input type="text"
      className='text-white px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none '
      placeholder='Enter a task'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <button
      type="submit"
      className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition'
      >Add</button>
    </form>
  )
}

export default AddTaskForm