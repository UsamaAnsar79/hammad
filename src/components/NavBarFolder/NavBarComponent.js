/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import "./navBar.css";
import navImage from "../../images/nav-profile.jpg";

export default function NavBarComponent({ isSidebarOpen, toggleSidebar }) {
  const handleSidebarToggle = () => {
    toggleSidebar(!isSidebarOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  function setOpen() {
    setIsOpen(!isOpen);
  }

  function handleClose() {
    setIsOpen(false);
  }
  return (
    <div className="navbar-main">
      <div className="nav-bar-content-container">
        <div className="nav-header-left">
          {/* <i class="bi bi-list-ul nav-sidebar-icon" onClick={handleSidebarToggle}></i> */}
          <h5 className="dashboard-heading">DASHBOARD</h5>
        </div>
        <div className="nav-header-right">
          <div className="nav-search-activity">
            <i class="bi bi-search" onClick={setOpen}></i>
            <i class="bi bi-activity"></i>
          </div>
          <div className="profile-menu">
            <img src={navImage} className="nav-profile-pic"></img>
            <i class="bi bi-caret-down-fill nav-caret-down"></i>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="search-container">
          <input
            type="text"
            placeholder="SEARCH"
            className="search-bar"
          ></input>
          <i class="bi bi-x search-close-icon" onClick={handleClose}></i>
        </div>
      )}
    </div>
  );
}
