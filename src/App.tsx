import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import SharedLayout from "./pages/SharedLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
