import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../components/Navbar/Navbar.component.tsx'
import SidebarComponent from '../../components/Navbar/Sidebar/Sidebar.component.tsx'
import Cards from '../Cards/Cards.component.tsx'
import { AppLayoutStyles } from './AppLayout.styles.tsx'
import { useLocation } from 'react-router-dom'
const AppLayout = () => {
  const location = useLocation()
  const currentURL = location.pathname
  return (
    <>
      <NavbarComponent />
      <AppLayoutStyles>
        <SidebarComponent />
        <div>
          <Outlet />
        </div>
        {!currentURL.includes('calendar') ? <Cards /> : <></>}
      </AppLayoutStyles>
    </>
  )
}
export default AppLayout
