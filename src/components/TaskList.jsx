import React from 'react'

const Tasklist = ({tasks,onDelete}) => {
  return (
    <ul className='w-full max-w-md space-y-3'>
    {tasks.map((task,index) => (
        <li
        key={index} 
        className='bg-white p-4 rounded-lg shadow flex justify-between items-center'
        >
           <span>{task}</span>
           <button
           onClick={() => onDelete(index)}
           className='text-red-500 hover:text-red-700 transition'>
            ❌
           </button>
        </li>
    ))}
    </ul>
  )
}

export default Tasklist;