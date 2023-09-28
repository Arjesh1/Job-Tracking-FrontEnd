import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
     <nav>
    <Logo/>
     </nav>
     <div className="page">
      <div className="info">
        <h1>Job <span>Tracking</span> App</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, rerum, corporis dolores officia nobis commodi aspernatur temporibus impedit neque quam tempora! Aut similique commodi facere ab excepturi praesentium? Voluptatem, pariatur.
        
        </p>
        <Link to="/register" className='btn register-link'>Register</Link>
        <Link to="/login" className='btn'>Login/Demo User</Link>
      </div>
      <img src={main} alt="job" className='img main-img' />
     </div>

     

    </Wrapper>


  )
}


export default Landing
