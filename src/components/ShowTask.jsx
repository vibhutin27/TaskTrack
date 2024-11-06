

const ShowTask = ({taskList, setTaskList, tasks, setTasks}) => {

    const handleEdit = (id) => {
        const selectEditTask = taskList.find(task => task.id === id)
        console.log(selectEditTask);
        setTasks(selectEditTask)
        console.log(tasks);
        //above we have send the id where we need to perform the edit the task
    }


    const handleDelete = (id) => {
        const filteredData = taskList.filter(newFiter => newFiter.id != id)
        setTaskList(filteredData);
    }
    
  return (
    <section className='showTask'> 
        <div className='head'>
            <div>
                <span className='title'>Todo</span>
                <span className='count'>{taskList.length}</span>
            </div>
            <button className='clearAll' onClick={() => setTaskList([])}>Clear All</button>
        </div>  
        <ul>
            {
                taskList.map((todo) => (
                    <li key={todo.id}>
                        <p>
                            <span className='name'>
                                    {todo.name}
                            </span>
                            <span>{todo.time}</span>
                        </p>
                        <i onClick={() => handleEdit(todo.id)}  className='bi bi-pencil-square'></i>
                        <i onClick={() => handleDelete(todo.id)} className='bi bi-trash'></i>
                    </li>
                ))
            }
            
        </ul>
    </section>

  )
}

export default ShowTask
