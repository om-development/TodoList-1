export default function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-6 border-t border-base-300">
      <div className="max-w-7xl mx-auto text-center text-sm text-base-content/50">
        &copy; {new Date().getFullYear()} TodoList. All rights reserved.
      </div>
    </footer>
  )
}
