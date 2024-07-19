
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainPage