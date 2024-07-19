import MainPage from "./Layout/MainPage"
import HomePage from "./pages/HomePage/HomePage"
import Register from "./pages/RegsiterPage/Regsiter"
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router-dom"


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<MainPage/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/register" element={<Register/>}/>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
