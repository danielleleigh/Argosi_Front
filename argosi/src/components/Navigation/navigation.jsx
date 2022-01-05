import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


const Navigation = ({ user }) => {
  return (
    <div>
      <Navbar bg="black" variant="dark">
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
              <Nav.Link href="/book">Book</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <Nav.Link href="dashboard/">Dashboard</Nav.Link>
              <Nav.Link href="clients/">Clients</Nav.Link>
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
