import React, { useState } from 'react';

const AddTaskForm = () => {
  const [task, setTask] = useState('');
  const [listData, setListData] = useState([]);

  function addTask() {
    if (task.trim() === '') return;
    setListData((listData) => {
      const updatedList = [...listData, task];
      console.log(updatedList);
      setTask('');
      return updatedList;
    });
  }

  function removeTask(i) {
    const updatedListData = listData.filter((_, index) => index !== i);
    setListData(updatedListData);
  }

  function removeAll() {
    setListData([]);
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">TODO LIST</h2>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Add Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTask}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>

          <p className="text-gray-600 mb-3 font-medium">Your Tasks:</p>

          {listData.length !== 0 &&
            listData.map((data, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 px-4 py-2 rounded mb-2"
              >
                <span className="text-gray-700">{data}</span>
                <button
                  onClick={() => removeTask(i)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

          {listData.length >= 1 && (
            <button
              onClick={removeAll}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AddTaskForm;
