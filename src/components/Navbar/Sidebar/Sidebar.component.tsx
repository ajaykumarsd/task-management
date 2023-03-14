import React from "react";
import { Link } from "react-router-dom";
import { SidebarContainer } from "./Sidebar.styles.tsx";
const SidebarComponent = () => {
  return (
    <SidebarContainer>
      <div class="wrapper">
        <div class="sidebar">
          <ul>
            <li>
              <Link to="/inbox">
                <span class="item">Inbox</span>
              </Link>
            </li>
            <li>
              <Link to="/upcoming">
                <span class="item">Upcoming</span>
              </Link>
            </li>
            <li>
              <Link to="/starred">
                <span class="item">Starred</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </SidebarContainer>
  );
};
export default SidebarComponent;
