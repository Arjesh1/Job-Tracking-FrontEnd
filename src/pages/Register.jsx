import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo } from "../components";


const Register = () => {

  return (
   <Wrapper>
      
    <form className="form">
      <Logo/>
      <h4>Register</h4>
      <FormRow type='text' name='fname' placeholder='Sam' labelText='First Name' />
      <FormRow type='text' name='lname' placeholder='Smith' labelText='Last Name' />
      <FormRow type='email' name='email' placeholder='Sam@smith.com' labelText='Email' />
      <FormRow type='password' name='password' placeholder='********' labelText='Password' />
      <button type="submit" className="btn btn-block">Submit</button>
      <p>Already a member?
        <Link to='/login' className="member-btn">Login</Link>
      </p>
    </form>

    

    </Wrapper>
    
  )
}

export default Register
