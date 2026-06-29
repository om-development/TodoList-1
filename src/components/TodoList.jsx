import { Search } from "lucide-react"
import TodoItem from "./TodoItem"

const categories = ["all", "work", "personal", "shopping"]

const todos = [
  { title: "List number 1", category: "work" },
  { title: "Buy a helicoptor", category: "shopping" },
  { title: "Finish your stuff", category: "personal" },
  { title: "Write a todolist app design in react", category: "work" },
  { title: "Plan scripts", category: "personal" },
  { title: "Order stuffs", category: "shopping" },
  { title: "Review todolist", category: "work" },
]

export default function TodoList() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-base-content">TodoList</h2>
        <button className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Add
        </button>
      </div>

      <div className="flex gap-2">
        {categories.map((cat) => (
          <label key={cat} className="cursor-pointer">
            <input type="radio" name="category" defaultChecked={cat === "all"} className="peer hidden" />
            <span className="inline-block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-base-200 border border-base-300 text-base-content/60 peer-checked:bg-primary peer-checked:text-primary-content peer-checked:border-primary peer-checked:shadow-sm">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </span>
          </label>
        ))}
      </div>

      <div className="flex justify-center">
          <label className="input input-bordered flex items-center gap-2 rounded-lg w-full">
          <Search className="w-4 h-4 text-base-content/40" />
          <input type="text" className="grow" placeholder="Search todos..." />
        </label>
      </div>

      <div className="space-y-3">
        {todos.map((todo, i) => (
          <TodoItem key={i} title={todo.title} category={todo.category} />
        ))}
      </div>
    </div>
  )
}
