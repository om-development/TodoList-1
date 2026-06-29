import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
//Header

export default function Auth() {
  return (
    <>
      <Header hideMenu hideCenterTitle />
      <div className="max-w-7xl mx-auto p-6">
        <div className="max-w-md mx-auto bg-base-200 border border-base-300 rounded-xl p-8">
          <h1 className="text-2xl font-bold tracking-tight text-base-content text-center mb-6">
            Sign In
          </h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-base-content/70 mb-1">Email</label>
              <input type="email" className="input input-bordered w-full" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-base-content/70 mb-1">Password</label>
              <input type="password" className="input input-bordered w-full" placeholder="••••••••" />
            </div>
            <button className="btn btn-primary w-full">Sign In</button>
            <p className="text-center text-sm text-base-content/50">
              Don't have an account? <button className="link link-primary">Sign Up</button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
