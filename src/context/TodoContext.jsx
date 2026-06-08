// src/context/TodoContext.jsx
import { useState, createContext, useEffect} from "react";

export const TodoContext = createContext()

export function TodoProvider( {children} ) {

    // Load from localStorage
    const [tasks, setTasks] = useState( () => {
        const savedTasks = localStorage.getItem("tasks")
        return savedTasks ? JSON.parse(savedTasks) : []
    } )


    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState("")


    // Save to localStorage
    useEffect( () => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    

    const addTask = (text) => {
        if (!text.trim()) return

        setTasks([...tasks, {
            id: Date.now(),
            text,
            completed: false
        }])
    }


    const deleteTask = (id) => {
        setTasks(tasks.filter( task => task.id !== id))
    }


    const toggleComplete = (id) => {
        setTasks(tasks.map( task => 
            task.id === id ? {...task, completed: !task.completed} : task
        ))
    }

    const startEdit = (task) => {
        setEditId(task.id)
        setEditText(task.text)
    }

    const saveEdit = () => {
        setTasks(tasks.map( task => 
            task.id === editId ? {...task, text: editText} : task
        ))
        setEditId(null)
        setEditText("")
    }

    const clearCompleted = () => {
        setTasks(tasks.filter( task => !task.completed))
    }

    return (
        <TodoContext.Provider value = { 
            {
                tasks, 
                addTask,
                deleteTask,
                toggleComplete,
                startEdit,
                saveEdit,
                editId,
                editText,
                setEditText,
                clearCompleted

        } 
        }>

            {children}

        </TodoContext.Provider>
    )
}

