import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) =>{
    setNewTask(event.target.value);
  }

  const addTask = () =>{
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList)
  }

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask} >Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task)=>{
          return <h1>{task}</h1>
        })}
      </div>
    </div>
  );
}

export default App;


