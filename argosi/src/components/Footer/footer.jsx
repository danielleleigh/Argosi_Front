import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter backgroundColor="light" className="text-center text-lg-left">
      <MDBContainer className="p-4">
        <MDBRow></MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{
          backgroundColor: "#9DA5CE",
          opacity: "",
          fontFamily: "MoonwildDecorative",
        }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark">Danielle Allen</a>
      </div>
    </MDBFooter>
  );
}
