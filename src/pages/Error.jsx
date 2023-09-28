import { Link, useRouteError } from 'react-router-dom'
import error404 from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  const error = useRouteError()

  if(error.status === 404){
    return<Wrapper>
       <div className="">
  <img src={error404} alt=" 404 Error" />
  <h3>Ohh! Page not found</h3>
  <Link to="/dashboard" className='btn '>
    Back Home</Link>
        </div>
    </Wrapper>

  }
  
  return (
    <Wrapper>
      <h1>Something error </h1>
      
    </Wrapper>
  )
}

export default Error
