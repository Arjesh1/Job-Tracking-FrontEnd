import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashboardContext } from '../pages/DashboardLayout'
import {VscClose} from 'react-icons/vsc'
import Logo from './Logo'
import Links from '../pages/utils/Links'
import { NavLink } from 'react-router-dom'
import{ useDispatch, useSelector } from 'react-redux'
import { setShowToggle } from '../system/systemSlice'


const SmallSideBar = () => {
  const {showToggle} = useSelector(state => state.system)
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className= {showToggle ? "sidebar-container show-sidebar" :"sidebar-container" }>
        <div className="content">
          <button type="button" className='close-btn' onClick={() => dispatch(setShowToggle(false))}>
            <VscClose/>
          </button>
          <header>
            <Logo/>
          </header>
          <div className="nav-links">
            {Links.map((link)=>{
              const{text, path, icon} = link
              return <NavLink to={path} key={text} end className='nav-link' onClick={() => dispatch(setShowToggle(false))}>
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
