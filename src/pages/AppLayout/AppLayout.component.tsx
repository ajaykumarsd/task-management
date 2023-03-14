import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../../components/Navbar/Navbar.component.tsx";
import SidebarComponent from "../../components/Navbar/Sidebar/Sidebar.component.tsx";
import { AppLayoutStyles } from "./AppLayout.styles.tsx";
const AppLayout = () => {
  return (
    <>
      <NavbarComponent />
      {/* <div style={{display: 'inline-block'}}> */}
      <AppLayoutStyles>
        <SidebarComponent />
        <Outlet />
      </AppLayoutStyles>

      {/* </div> */}
    </>
  );
};
export default AppLayout;
