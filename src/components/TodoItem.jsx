//  src/components/TodoItem.jsx

import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

function TodoItem( {task} ) {

    const {
        deleteTask,
        toggleComplete,
        startEdit,
        saveEdit,
        editId,
        editText,
        setEditText
    } = useContext(TodoContext)

    return (
        <li className="flex justify-between items-center bg-white/20 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-md hover:shadow-lg hover:bg-white/25 transition-all duration-300">

            <div className="flex items-center gap-3 flex-1 min-w-0">

                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={ () => toggleComplete(task.id) }
                    className="w-5 h-5 accent-pink-500 cursor-pointer" 
                />

                {/* Edit mode */}
                {editId === task.id ? (
                    <input 
                        value={editText}
                        onChange={ (e) => setEditText(e.target.value) }
                        onKeyDown={ (e) => e.key === "Enter" && saveEdit() }
                        className="text-black px-3 py-1 rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
                    />
                ) : (
                    <span
                        className={`flex-1 min-w-0 break-words ${task.completed ? "line-through text-gray-500" : "text-gray-900 font-medium" }`}
                    >
                        {task.text}
                    </span>
                )
            }
            </div>

            <div
                className="flex gap-3 ml-3"
            >
                {/* edit */}
                {editId !== task.id && (
                    <button
                        onClick={ () => startEdit(task) }
                        className="hover:scale-110 transition cursor-pointer"
                    >
                        {'\u270F'}
                    </button>
                )}

                {/* save */}
                {editId === task.id && (
                    <button
                        onClick={saveEdit} 
                        className="hover:scale-110 transition cursor-pointer"
                    >
                        {'\u{1F4BE}'}
                    </button>
                )}

                {/* delete */}
                <button
                    onClick={ () => deleteTask(task.id) }
                    className="hover:scale-110 transition cursor-pointer" 
                >
                    {'\u274C'}
                </button>


            </div>

        </li>
    )
}

export default TodoItem