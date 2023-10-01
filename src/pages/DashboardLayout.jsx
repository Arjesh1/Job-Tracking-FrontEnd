import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSideBar } from '../components'
import { createContext, useContext, useState } from 'react'

const DashboardContext = createContext()

const DashboardLayout = () => {

  return (
    <DashboardContext.Provider>
    <Wrapper>
      <main className='dashboard'>
        <SmallSideBar />
        <BigSidebar/>
        <div>
          <Navbar/>
          <div className="dashboard-page">
           <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
    </DashboardContext.Provider>
  )
}
export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout
