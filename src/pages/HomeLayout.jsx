import { Outlet } from "react-router-dom"
import { Logo } from "../components"

const HomeLayout = () => {
  return (
    <div>
      
      <Outlet/>
      
    </div>
  )
}

export default HomeLayout
