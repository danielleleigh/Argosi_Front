import React from "react";
import "./navigation.css";
import "bootstrap/dist/css/bootstrap.css";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";



const Navigation = ({ user }) => {
  return (
    <div>
      <Navbar
        elevation={0} style={{
          alignContent: "center",
          backgroundColor: "transparent",
          variant: "light",
          width: "100%",
          fontSize: "20px",
          fontFamily: 'Blanka-Regular',
          color: "white",
          wordSpacing: '30'
        }}
      >
        <Navbar.Brand style={{ paddingRight: "25%" }}>
          <img
            src="/a.png"
            alt="Blank-2000-x-2000-3"
            border="0"
            height="150"
            margin="0"
            
          />
        </Navbar.Brand>
        <Nav style={{ display: "flex" }}>
          <Nav.Link href="/">Home</Nav.Link>
          {!user && (
            <React.Fragment>
              <Nav.Link href="/login">Login</Nav.Link>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <Nav.Link  href="/dashboard/">Dashboard</Nav.Link>
              <Nav.Link  href="/clients/">Clients</Nav.Link>
              <NavDropdown title="Contact">
                <NavDropdown.Item href="/email">Email Client</NavDropdown.Item>
                <NavDropdown.Item href="https://argosi.substack.com/">
                  Newsletter Board
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/logout">Logout</Nav.Link>
            </React.Fragment>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
