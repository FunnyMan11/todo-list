import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
    setNewTask('');
  };

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => task !== taskName);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => (
          <div key={task}>
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
