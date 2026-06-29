import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router"

export default function Header({ hideMenu, hideCenterTitle }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="relative flex items-center justify-between px-6 lg:px-12 py-4 bg-base-200 border-b border-base-300">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
        <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-white text-black font-bold text-sm">
          TL
        </div>
        <div className="flex items-center gap-1">
          <span className="text-base-content font-semibold">Todo</span>
          <span className="text-primary font-semibold">List</span>
        </div>
      </div>
      {!hideCenterTitle && (
        <h1 className="hidden md:block absolute left-1/2 -translate-x-1/2 text-base-content font-bold text-lg">
          Tasks[4]
        </h1>
      )}
      {!hideMenu && (
        <>
          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex btn btn-primary btn-sm" onClick={() => navigate("/auth")}>
              Login / SignUp
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="btn btn-ghost btn-square md:hidden"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          {open && (
            <div className="absolute top-full right-0 mr-6 mt-2 w-56 bg-base-200 border border-base-300 rounded-xl p-4 shadow-lg md:hidden z-50">
              <div className="flex flex-col gap-3">
                <h2 className="text-base font-bold text-base-content text-center">
                  Tasks[3]
                </h2>
                <button className="btn btn-primary btn-sm w-full" onClick={() => navigate("/auth")}>
                  Login / SignUp
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </header>
  )
}
