import { Pencil, Trash2 } from "lucide-react"

export default function TodoItem({ title = "Untitled", category = "personal" }) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-base-200 border border-base-300 rounded-xl">
      <div className="flex items-center gap-3">
        <input type="checkbox" className="checkbox checkbox-primary" />
        <div>
          <p className="text-base-content font-medium">{title}</p>
          <span className="text-xs text-base-content/50 capitalize">{category}</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button className="btn btn-ghost btn-sm btn-square">
          <Pencil className="w-4 h-4 text-base-content/60" />
        </button>
        <button className="btn btn-ghost btn-sm btn-square">
          <Trash2 className="w-4 h-4 text-error" />
        </button>
      </div>
    </div>
  )
}
