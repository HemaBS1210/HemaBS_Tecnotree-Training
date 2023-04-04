import React, { useState, useEffect } from 'react';
//import './TodoList.css'; // Import the CSS file

function TodoList() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTaskList(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask) {
      setTaskList([
        ...taskList,
        {
          title: newTask,
          completed: false
        }
      ]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks.splice(index, 1);
    setTaskList(updatedTasks);
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].completed = true;
    setTaskList(updatedTasks);
  };

  return (
    <div className="todo-list-container"> {/* Add a CSS class to the container */}
      <h1>Todo List</h1>
      <div className="add-task-container"> {/* Add a CSS class to the container */}
        <input className='inputbox' type="text" value={newTask} onChange={handleNewTask} />
        <button className='task-item' onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="task-list"> {/* Add a CSS class to the list */}
        {taskList.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onComplete={() => handleCompleteTask(index)}
            onDelete={() => handleDeleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ task, onComplete, onDelete }) {
  return (
    <li
      className={`task-item ${task.completed ? 'completed' : ''}`}
    >
      <input type="checkbox" checked={task.completed} onChange={onComplete} />
      <span>{task.title}</span>
      <button className='delete-task-button' onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoList;
