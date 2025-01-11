import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import SharedLayout from "./pages/SharedLayout"
import ContactPage from "./pages/ContactPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: "contact",
        element: <ContactPage />
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
