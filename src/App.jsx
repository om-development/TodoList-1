import { createBrowserRouter, RouterProvider } from "react-router"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Auth from "./pages/Auth.jsx"

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
