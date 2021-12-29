import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./navBar.css";

const NavBar = ({ user }) => {
  return (
    <div>
      <Navbar bg="blue" variant="dark">
        <Navbar.Brand>
          <img
            src="https://i.ibb.co/b1b9kbp/Blank-500-x-500-2.png"
            alt="Blank-2000-x-2000-3"
            border="0"
            height="100"
            margin="0"
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          {!user && (
            <React.Fragment>
              <NavDropdown title="Login">
                <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                <NavDropdown.Item href="/login/register">
                  Register
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/api/clients/userclients/">Clients</Nav.Link>
            </React.Fragment>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
