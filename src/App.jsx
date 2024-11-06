import { useEffect, useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'
import './App.css'

function App() {
  const [theme, setTheme] = useState("dark");
 const [taskList, setTaskList] = useState( () => {
  try {
    return JSON.parse(localStorage.getItem("tasklist")) || [];
  } catch (error) {
    console.error("Error parsing JSON from local storage:", error);
    return [];
  }
} );
 const [tasks, setTasks] = useState({});

 useEffect(() => {
  localStorage.setItem("tasklist", JSON.stringify(taskList));
}, [taskList]);

  return (
    <>
     <Header />
     <AddTask  tasks={tasks} setTasks={setTasks} taskList={taskList} setTaskList={setTaskList} />
     <ShowTask  tasks={tasks} setTasks={setTasks} taskList={taskList} setTaskList={setTaskList} />
     
     </>
  )
}

export default App
