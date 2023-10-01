import Wrapper from "../assets/wrappers/BigSidebar"
import { useDashboardContext } from "../pages/DashboardLayout"
import NavLinks from './NavLinks'
import Logo from './Logo'
import{ useDispatch, useSelector } from 'react-redux'
import { setShowToggle } from '../system/systemSlice'

const BigSidebar = () => {
    const {showToggle} = useSelector(state => state.system)
    console.log(showToggle);
  // const dispatch = useDispatch()


  return (
    <Wrapper>
      <div className={showToggle? 'sidebar-container' : 'sidebar-container show-sidebar'}>
        <div className="content">
          <header>
            <Logo/>
          </header>
          <NavLinks isBigSidebar/>
        </div>

      </div>
    </Wrapper>
  )
}

export default BigSidebar
