import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"

const MainPage = () => {
  return (
    <div>
        <Outlet/>
        <Footer/>
        <ToastContainer/>
    </div>
  )
}

export default MainPage