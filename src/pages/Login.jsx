
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'

const Login = () => {
  return (
   <Wrapper>
    <form className='form'>
      <Logo/>
      <h4>Login</h4>
      <FormRow type='email' name='email' placeholder='Sam@smith.com' labelText='Email' />
      <FormRow type='password' name='password' placeholder='********' labelText='Password' />
      <button type="submit" className="btn btn-block">Submit</button>
      <button  className="btn btn-block">Demo</button>
      <p>Not a member?
        <Link to='/register' className="member-btn">Register</Link>
      </p>



    </form>

   </Wrapper>
  )
}

export default Login
