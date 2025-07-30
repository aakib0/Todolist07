import React, {useState} from 'react'

const Tasklist = ({tasks,onDelete ,onEdit}) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editText,setEditText] = useState("")
    
    
  return (
    <ul className='w-full max-w-md space-y-3'>
    {tasks.map((task,index) => (
        <li
        key={index} 
        className='bg-white p-4 rounded-lg shadow flex justify-between items-center'
        >
            {editIndex === index ? (
                <>
                <input type="text" value={editText}
                onChange={(e) => setEditText(e.target.value) }
                className='border px-2 py-1 rounded w-full mr-2' />
                <button onClick={() => {
                    onEdit(index, editText)
                    setEditIndex(null);
                }}
                className='text-green-600 hover:text-green-800 font-semibold'
                >
                    Save
                </button>
                </>
            ) : (
                <>
           <span>{task}</span>
            <div className='space-x-2'>
                <button
                onClick={()=>{
                setEditIndex(index); 
                setEditText(task); 
                }}
                className="text-blue-500 hover:text-blue-700"
                >
                <i className="ri-edit-line"></i>
                </button>
           <button
           onClick={() => onDelete(index)}
           className='text-red-500 hover:text-red-700 transition'>
           <i className="ri-delete-bin-6-line"></i>
           </button>
           </div>
           </>
          )}
        </li>
    ))}
    </ul>
  );
}

export default Tasklist;