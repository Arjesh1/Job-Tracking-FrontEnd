import Wrapper from "../assets/wrappers/BigSidebar"
import { useDashboardContext } from "../pages/DashboardLayout"


const BigSidebar = () => {
const data = useDashboardContext()
console.log(data)

  return (
    <Wrapper>
      BigSidebar
    </Wrapper>
  )
}

export default BigSidebar
