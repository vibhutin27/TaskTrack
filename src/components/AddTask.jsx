

const AddTask = ({taskList, setTaskList, tasks, setTasks}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if(tasks.id){
      const date = new Date();
      const updateTaskList = taskList.map((todo)=> (
        todo.id === tasks.id ? {id: tasks.id, name: tasks.name, time:  `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`} : todo
      ));
      setTaskList(updateTaskList);
      setTasks({});
      
    }else {
      const date = new Date();
      const newTask = {
      id: date.getTime(),
      name: e.target.addTask.value,
      time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
      }
      setTaskList([...taskList, newTask]);
      setTasks({});
      }
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" value={tasks.name || taskList.name || ""} onChange={(e) => setTasks({...tasks, name: e.target.value})} name="addTask" placeholder='Add Task' maxLength={25} />
        <button type="submit">{tasks.id ? "Edit Task" : "Add Task"}</button>
      </form>
    </section>
  )
}

export default AddTask
