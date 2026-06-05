// src/components/TodoList.jsx

import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import TodoItem from "./TodoItem"

function TodoList() {
    const {tasks, clearCompleted} = useContext(TodoContext)

    return(
        <>
            <ul className="space-y-2">
                {tasks.map( (task) => (
                    <TodoItem key={task.id} task={task} />
                ))}
            </ul>

            <button
                onClick={clearCompleted}
                className="mt-5 w-full py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r from-red-500 to-pink-500
                hover:from-red-600 hover:to-pink-600
                shadow-lg hover:shadow-xl
                transition-all duration-300
                hover:scale-[1.02] cursor-pointer"
            
            >
                Clear Completed {"\u{1F5D1}"}
            </button>
        
        </>
    )
}

export default TodoList