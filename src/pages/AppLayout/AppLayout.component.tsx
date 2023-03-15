import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../components/Navbar/Navbar.component.tsx'
import SidebarComponent from '../../components/Navbar/Sidebar/Sidebar.component.tsx'
import Cards from '../Cards/Cards.component.tsx'
import Chart from '../Charts/Chart.component.tsx'
import { AppLayoutStyles } from './AppLayout.styles.tsx'
const AppLayout = () => {
  return (
    <>
      <NavbarComponent />
      <AppLayoutStyles>
        <SidebarComponent />
        <div>
          <Outlet />
          <Chart />
        </div>
        <Cards />
      </AppLayoutStyles>
    </>
  )
}
export default AppLayout
