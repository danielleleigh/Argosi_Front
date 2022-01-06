import React from "react";
import "./navigation.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";



const Navigation = ({ user }) => {
  return (
    <div>
      <Navbar
        style={{
          alignContent: "center",
          backgroundColor: "#9DA5CE",
          variant: "light",
          width: "100%",
          fontSize: "24px",
          fontFamily: "MoonwildDecorative",
          color: "white",
        }}
      >
        <Navbar.Brand style={{ paddingRight: "25%" }}>
          <img
            src="/logoargosi.png"
            alt="Blank-2000-x-2000-3"
            border="0"
            height="100"
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
