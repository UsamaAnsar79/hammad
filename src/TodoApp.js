// TodoApp.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, deleteTask } from './actions';

function TodoApp() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [currentTask, setCurrentTask] = useState('');

  const handleAddTask = () => {
    if (currentTask.trim() !== '') {
      dispatch(addTask(currentTask));
      setCurrentTask('');
    }
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className='main-div'>
      <h1 className='heading'>Todo App</h1>
      
      <input  className='input'
        type="text" 
        placeholder="Enter a task..." 
        value={currentTask} 
        onChange={(e) => setCurrentTask(e.target.value)} 
      />
      <button className='btn' onClick={handleAddTask}>Add Task</button>
      <ul className='list'>
        {tasks.map(task => (
          <li key={task.id}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => handleToggleTask(task.id)} 
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button className='btn' onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
