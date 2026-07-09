import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { fetchTodos } from "../services/api.jsx"
import TodoItem from "./TodoItem"
import AddTodoModal from "./AddTodoModal"

const categories = ["all", "work", "personal", "shopping"];

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const getTodos = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  useEffect(() => { getTodos(); }, []);

  const addTodo = (title, category) => {
    setTodos((prev) => [...prev, { id: Date.now(), todo: title, category }]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filtered = todos.filter(
    (todo) =>
      (activeCategory === "all" || todo.category === activeCategory) &&
      todo.todo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-base-content">TodoList</h2>
        <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Add
        </button>
      </div>

      <AddTodoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={addTodo}
      />

      <div className="flex gap-2">
        {categories.map((cat) => (
          <label key={cat} className="cursor-pointer">
            <input type="radio" name="category" checked={activeCategory === cat} onChange={() => setActiveCategory(cat)} className="peer hidden" />
            <span className="inline-block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-base-200 border border-base-300 text-base-content/60 peer-checked:bg-primary peer-checked:text-primary-content peer-checked:border-primary peer-checked:shadow-sm">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </span>
          </label>
        ))}
      </div>

      <div className="flex justify-center">
          <label className="input input-bordered flex items-center gap-2 rounded-lg w-full">
          <Search className="w-4 h-4 text-base-content/40" />
          <input type="text" className="grow" placeholder="Search todos..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </label>
      </div>

      <div className="space-y-3">
        {filtered.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.todo} category={todo.category || "personal"} onDelete={deleteTodo} />
        ))}
      </div>
    </div>
  )
}