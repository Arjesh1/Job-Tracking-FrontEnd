import { NavLink } from 'react-router-dom'
import {useDashboardContext} from '../pages/DashboardLayout'
import Links from '../pages/utils/Links'
import{ useDispatch, useSelector } from 'react-redux'
import { setShowToggle } from '../system/systemSlice'

const NavLinks = ({isBigSidebar}) => {
    const {showToggle} = useSelector(state => state.system)
    const dispatch = useDispatch()
  return (
    <div className='nav-links'>
        {Links.map((link) =>{
            const {text,path, icon} = link
            return(
                <NavLink to={path} key={text} className="nav-link" onClick={() => isBigSidebar? null : dispatch (setShowToggle(false))} end >
                    <span className='icon'>{icon}</span>
                    {text}
                </NavLink>
            )

        })}
      
    </div>
  )
}

export default NavLinks
