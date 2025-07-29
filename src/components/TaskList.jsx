import React from 'react'

const Tasklist = ({tasks}) => {
  return (
    <ul className='w-full max-w-md space-y-3'>
    {tasks.map((task,index) => (
        <li
        key={index} 
        className='bg-white p-4 rounded-lg shadow flex justify-between items-center'
        >
            {task}
        </li>
    ))}
    </ul>
  )
}

export default Tasklist;