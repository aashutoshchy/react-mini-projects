function TaskList({ task }) {
    return (
        <>
            <li className="text-2xl px-4 py-2 flex items-center justify-between">{task}<button onClick={addTask()}><i class="fa-solid fa-trash cursor-pointer"></i></button></li>
        </>
    )
}

export default TaskList