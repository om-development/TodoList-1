import { useState } from "react"
import { X } from "lucide-react"
import { fetchRandomTodo } from "../services/api.jsx"

const categories = ["work", "personal", "shopping"]

export default function AddTodoModal({ open, onClose, onAdd }) {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("work")
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return
    onAdd(title.trim(), category)
    setTitle("")
    setCategory("work")
    onClose()
  }

  async function handleAddRandom() {
    setLoading(true);
    try {
      const data = await fetchRandomTodo();
      onAdd(data.todo, category);
      setTitle("")
      setCategory("work")
      onClose();
    } catch (err) {
      console.log("Error fetching random todo:", err);
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-base-200 border border-base-300 rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
        <button className="btn btn-ghost btn-sm btn-square absolute right-4 top-4" onClick={onClose}>
          <X className="w-4 h-4" />
        </button>
        <h3 className="text-xl font-bold text-base-content mb-6">Add New Task</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-base-content/70 mb-1.5">Task</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter task title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-base-content/70 mb-2">Category</label>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <label key={cat} className="cursor-pointer">
                  <input
                    type="radio"
                    name="modal-category"
                    value={cat}
                    checked={category === cat}
                    onChange={() => setCategory(cat)}
                    className="peer hidden"
                  />
                  <span className="inline-block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-base-300 border border-base-300 text-base-content/60 peer-checked:bg-primary peer-checked:text-primary-content peer-checked:border-primary">
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex gap-2 justify-end pt-2">
            <button type="submit" className="btn btn-primary">Add Task</button>
            <button type="button" className="btn btn-secondary" onClick={handleAddRandom} disabled={loading}>
              {loading ? "Loading..." : "Add from DummyJSON"}
            </button>
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}