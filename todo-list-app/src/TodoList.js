// src/TodoList.js
import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='container mt-5 w-50'>
            <h2 className='text-center'>ToDo-List App</h2>
        <div className='input-group'>
            <input className="form-control" type="text" placeholder="Enter What You Want Do a Task......" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
            <button className='btn btn-success' onClick={addTask}>Add ToDo</button>
        </div>
        <ul className='list-group mt-4'>
            {tasks.map((task, index) => (
            <li className="list-group-item" key={index}>
                <p checked={task.completed} onChange={() => toggleTask(index)} />
                {task.text}
                <button id="delete" onClick={() => deleteTask(index)}>❌</button>
            </li>
            ))}
        </ul>
    </div>
  );
}

export default TodoList;
