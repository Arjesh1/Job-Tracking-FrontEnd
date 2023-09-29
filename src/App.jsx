import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { HomeLayout, Landing, Register, Login, DashboardLayout, Error, AddJob, Stats, Profile, Admin, AllJobs
} from './pages/index'

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
    index: true,
    element: <Landing/>
  },
  {
    path:'register',
    element: <Register/>
  },
  {
    path:'login',
    element: <Login/>
  },
  {
    path:'dashboard',
    element: <DashboardLayout/>,
    children: [
     {
      index: true,
      element: <AddJob/>
     },
     {
      path:'stats',
      element: <Stats/>
     },
     {
      path:'profile',
      element: <Profile/>
     },
      {
      path:'all-jobs',
      element: <AllJobs/>
     },
     {
      path:'admin',
      element: <Admin/>
     }

    ]
  },
  
    ]
  }
   

])


const App = () => {
  return <RouterProvider router = {router}/>
}

export default App
