// src/components/TodoInput.jsx

import {useState, useContext} from "react"
import { TodoContext} from "../context/TodoContext"

function TodoInput() {
    const {addTask} = useContext(TodoContext)
    const [text, setText] = useState("")

    const handleAdd = () => {
        addTask(text)
        setText("")
    }

    return (
        <div className="flex items-center gap-3  mb-5 bg-white/20 p-3 rounded-2xl backdrop-blur-md border border-white/30">

            <input 
                className="flex-1 px-4 py-2 rounded-xl text-black outline-none bg-white/80 placeholder-gray-500 focus:ring-2 focus:ring-pink-400 transition"
            
                value = {text}
                onChange = { (e) => setText(e.target.value) }
                onKeyDown={ (e) => e.key === "Enter"  && handleAdd() }
                placeholder = "Enter your task..."
            />

            <button
                onClick = { handleAdd }
                className = "bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 rounded-xl font-semibold text-white shadow-md hover:scale-105 hover:shadow-lg transition"
            >
                Add {"\u2795"}
            </button>

        </div>
    )
}

export default TodoInput