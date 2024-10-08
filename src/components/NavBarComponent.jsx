import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Dropdown, Form, FormControl, Button } from "react-bootstrap";

export default function NavBarComponent({ heading }) {
  const [userName, setUserName] = useState("");
  const [userInitial, setUserInitial] = useState("");
  
  useEffect(() => {
    // Dummy data for user (You can change this to use localStorage)
    const storedUserName = localStorage.getItem("name") || "John Doe";
    setUserName(storedUserName);
    setUserInitial(storedUserName.charAt(0).toUpperCase());
  }, []);

  return (
    <Navbar bg="light" expand="lg" className="border-bottom shadow-sm">
      <Container>
        {/* Brand or Dashboard Heading */}
        <Navbar.Brand href="#">{heading || "Dashboard"}</Navbar.Brand>

        {/* Toggle button for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Search Bar */}
          <Form className="d-flex ms-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          {/* Right-side menu: Notifications and Profile */}
          <Nav className="ml-auto">
            {/* Notification Icon (Static) */}
            <Nav.Link>
              <i
                className="bi bi-bell"
                style={{ fontSize: "1.4rem", cursor: "pointer" }}
                onClick={() => alert("No notifications available")}
              ></i>
            </Nav.Link>

            {/* Profile Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle variant="secondary" id="dropdown-profile">
                <span className="user-initial me-2">
                  {userInitial}
                </span>
                <i className="bi bi-caret-down-fill"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">View Profile</Dropdown.Item>
                <Dropdown.Item href="#">Settings</Dropdown.Item>
                <Dropdown.Item href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
