import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashboardContext } from '../pages/DashboardLayout'
import {VscClose} from 'react-icons/vsc'
import Logo from './Logo'
import Links from '../pages/utils/Links'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'

const SmallSideBar = () => {
  const {showSidebar, toggleSideBar} = useDashboardContext()
  return (
    <Wrapper>
      <div className= {showSidebar ? "sidebar-container show-sidebar" :"sidebar-container" }>
        <div className="content">
          <button type="button" className='close-btn' onClick={toggleSideBar}>
            <VscClose/>
          </button>
          <header>
            <Logo/>
          </header>
          {/* <NavLinks/> */}
          <div className="nav-links">
            {Links.map((link)=>{
              const{text, path, icon} = link
              return <NavLink to={path} key={text} end className='nav-link' onClick={toggleSideBar}>
                <span className='icon'>{icon}</span>
                {text}
              </NavLink>

            })}
          </div>
        </div>

      </div>
    </Wrapper>
  )
}

export default SmallSideBar
