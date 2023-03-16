import React from "react";
import { Link } from "react-router-dom";
import { SidebarContainer } from "./Sidebar.styles.tsx";
const SidebarComponent = () => {
  return (
    <SidebarContainer>
      <div className="wrapper">
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/inbox">
                <span className="item">Inbox</span>
              </Link>
            </li>
            <li>
              <Link to="/upcoming">
                <span className="item">Upcoming</span>
              </Link>
            </li>
            <li>
              <Link to="/starred">
                <span className="item">Starred</span>
              </Link>
            </li>
            <li>
              <Link to="/calendar">
                <span className="item">Calendar</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </SidebarContainer>
  );
};
export default SidebarComponent;
