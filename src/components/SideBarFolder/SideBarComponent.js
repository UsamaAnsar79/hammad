import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { PiImagesLight } from "react-icons/pi";
import { HiOutlineChartPie } from "react-icons/hi2";
import { TbHexagons } from "react-icons/tb";
import { SiGoogleforms } from "react-icons/si";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { BsPinAngle } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { HiOutlineChartBar } from "react-icons/hi2";
import { BsAlarm } from "react-icons/bs";
import "./sideBar.css";
const SideBarComponent = ({ isOpen, toggleSidebar }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [barBtnClicked, setBarBtnClicked] = useState(false);

  const handleToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMouseEnter = () => {
    if (!barBtnClicked) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!barBtnClicked) {
      setIsExpanded(false);
      setActiveDropdown(null);
    }
  };

  const handleBarBtn = () => {
    setBarBtnClicked(!barBtnClicked);
    setIsExpanded(!isExpanded);
    toggleSidebar(!isOpen);
  };

  return (
    <>
      <i class="bi bi-list-ul nav-sidebar-icon" onClick={handleBarBtn}></i>
      <div
        className={`sidebar ${isExpanded ? "expanded" : "collapsed"} ${isOpen ? "open" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="sidebar-header">
          <FaReact className="react-icon" />
          {isExpanded && <h5>CREATIVE TIM</h5>}
        </div>
        <ul className="dropdown-ul">
          <li>
            <a href="#home">
              <HiOutlineChartPie />
              <span>Dashboard</span>
            </a>
          </li>
          {/* Pages */}
          <li>
            <a href="#services" onClick={() => handleToggle(1)}>
              <PiImagesLight />
              <span>Pages</span>
              {isExpanded &&
                (activeDropdown === 1 ? (
                  <FaCaretUp className="caret" />
                ) : (
                  <FaCaretDown className="caret" />
                ))}
            </a>
            <ul className={`dropdown ${activeDropdown === 1 ? "active" : ""}`}>
              <li>
                <a href="#service1">Pricing</a>
              </li>
              <li>
                <a href="#service2">RTL Support</a>
              </li>
              <li>
                <a href="#service3">TimeLine</a>
              </li>
              <li>
                <a href="#service4">Login</a>
              </li>{" "}
              <li>
                <a href="#service5">Register</a>
              </li>
              <li>
                <a href="#service6">Lock Screen</a>
              </li>
              <li>
                <a href="#service7">User Profile</a>
              </li>
            </ul>
          </li>
          {/* Components */}
          <li>
            <a href="#services" onClick={() => handleToggle(2)}>
              <TbHexagons />
              <span>Components</span>
              {isExpanded &&
                (activeDropdown === 1 ? (
                  <FaCaretUp className="caret" />
                ) : (
                  <FaCaretDown className="caret" />
                ))}
            </a>
            <ul className={`dropdown ${activeDropdown === 2 ? "active" : ""}`}>
              <li>
                <a href="#service1">MultiLevel Collapse</a>
              </li>
              <li>
                <a href="#service2">Buttons</a>
              </li>
              <li>
                <a href="#service3">Grid System</a>
              </li>
              <li>
                <a href="#service4">Panels</a>
              </li>{" "}
              <li>
                <a href="#service5">Sweet Alert</a>
              </li>
              <li>
                <a href="#service6">Notifications</a>
              </li>
              <li>
                <a href="#service7">Icons</a>
              </li>
              <li>
                <a href="#service7">Typography</a>
              </li>
            </ul>
          </li>
          {/*  Forms*/}
          <li>
            <a href="#services" onClick={() => handleToggle(3)}>
              <SiGoogleforms />
              <span>Forms</span>
              {isExpanded &&
                (activeDropdown === 1 ? (
                  <FaCaretUp className="caret" />
                ) : (
                  <FaCaretDown className="caret" />
                ))}
            </a>
            <ul className={`dropdown ${activeDropdown === 3 ? "active" : ""}`}>
              <li>
                <a href="#service1">Regular Forms</a>
              </li>
              <li>
                <a href="#service2">Extended Forms</a>
              </li>
              <li>
                <a href="#service3">Validation Forms</a>
              </li>
              <li>
                <a href="#service4">Wizard</a>
              </li>
            </ul>
          </li>
          {/* TAbles */}
          <li>
            <a href="#services" onClick={() => handleToggle(4)}>
              <IoExtensionPuzzleOutline />
              <span>Tables</span>
              {isExpanded &&
                (activeDropdown === 1 ? (
                  <FaCaretUp className="caret" />
                ) : (
                  <FaCaretDown className="caret" />
                ))}
            </a>
            <ul className={`dropdown ${activeDropdown === 4 ? "active" : ""}`}>
              <li>
                <a href="#service1">Regular Tables</a>
              </li>
              <li>
                <a href="#service2">Extended Tables</a>
              </li>
              <li>
                <a href="#service3">React Tables</a>
              </li>
            </ul>
          </li>
          {/* Maps */}
          <li>
            <a href="#services" onClick={() => handleToggle(5)}>
              <BsPinAngle />
              <span>Maps</span>
              {isExpanded &&
                (activeDropdown === 1 ? (
                  <FaCaretUp className="caret" />
                ) : (
                  <FaCaretDown className="caret" />
                ))}
            </a>
            <ul className={`dropdown ${activeDropdown === 5 ? "active" : ""}`}>
              <li>
                <a href="#service1">Google Maps</a>
              </li>
              <li>
                <a href="#service2">Full Screen Map</a>
              </li>
              <li>
                <a href="#service3">Vector Map</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#home">
              <VscTools />
              <span>Widgets</span>
            </a>
          </li>
          <li>
            <a href="#home">
              <HiOutlineChartBar />
              <span>CHARTS</span>
            </a>
          </li>
          <li>
            <a href="#home">
              <BsAlarm />
              <span>CALENDAR</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBarComponent;
