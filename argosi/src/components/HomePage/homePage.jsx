import React from "react";
import { Container } from "react-bootstrap";
import "./homePage.css";

const HomePage = (props) => {
  return (
    <Container fluid>
      <React.Fragment>
        <div className="text">
          
          <p>
            <a href="/buyer" className="btn btn-dark">
              Buy
            </a>{" "}
            &nbsp;
            <a href="/seller" className="btn btn-dark">
              Sell
            </a>
          </p>
        </div>
      </React.Fragment>
    </Container>
  );
};

export default HomePage;
