import { NavLink } from 'react-router-dom'
import {useDashboardContext} from '../pages/DashboardLayout'
import Links from '../pages/utils/Links'
const NavLinks = ({isBigSidebar}) => {
    const {user, toggleSideBar} = useDashboardContext()
  return (
    <div className='nav-links'>
        {Links.map((link) =>{
            const {text,path, icon} = link
            return(
                <NavLink to={path} key={text} className="nav-link" onClick={isBigSidebar? null : toggleSideBar} end >
                    <span className='icon'>{icon}</span>
                    {text}
                </NavLink>
            )

        })}
      
    </div>
  )
}

export default NavLinks
