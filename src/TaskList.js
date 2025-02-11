import React, { useEffect, useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch tasks from the given URL
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data); // Set tasks to state
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Turn off loading
      }
    };

    fetchTasks();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> {task.completed ? '(Completed)' : '(Pending)'}
            <hr/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;