import Wrapper from "../assets/wrappers/Navbar"
import { FiAlignJustify } from "react-icons/fi";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";

const Navbar = () => {
    const {toggleSideBar} = useDashboardContext()
  return (
    <Wrapper>

        <div className="nav-center">
            <button type="button" className="toggle-btn" onClick={toggleSideBar}>
           <FiAlignJustify/>
            </button>
            <div>
                <Logo/>
                <h4 className="logo-text">Dashboard</h4>
            </div>
            <div className="btn-container">Toggle/Logout</div>
        </div>
      
    </Wrapper>
  )
}

export default Navbar
