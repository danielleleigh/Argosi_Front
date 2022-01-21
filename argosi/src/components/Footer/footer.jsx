import React from "react";
import { Nav, Navbar, NavDropdown, NavbarBrand, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <React.Fragment>
      <nav class="navbar fixed-bottom navbar-light bg-transparent " style={{paddingLeft:"37%", paddingRight:"50%"}}>
        <div class="container-fluid">
          <a class="navbar-brand" >
            {" "}
            <div
              style={{
                backgroundColor: "Transparent",
                alignItems: "center",
                textAlign: "center",
                fontFamily: "Blanka-Regular",
                color: "#E68D05",
              }}
            >
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a
                style={{
                  fontFamily: "Blanka-Regular",
                  color: "#E68D05",
                }}
                className="text"
              >
                Danielle Allen
              </a>
            </div>
          </a>
        </div>
      </nav>

    </React.Fragment>
  );
}
