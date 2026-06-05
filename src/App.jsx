import {TodoProvider} from "./context/TodoContext"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  return (
    <TodoProvider>

       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400">   {/* Background gradient for the entire app */}

        <div className="w-96 bg-white/25 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/30 text-white  ">   {/* card UI */}

          <h1 className="text-4xl font-extrabold text-center mb-6 tracking-wide text-white drop-shadow-md ">Task Flow</h1>

          <TodoInput />
          <TodoList />

        </div>
      </div>

    </TodoProvider>
  )
}

export default App