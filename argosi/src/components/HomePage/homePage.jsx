import React, { Component } from "react";
import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";
import SchedulerCalendar from "scheduler-calendar";
import { Table, Card, Container, Row, Col } from "react-bootstrap";

//landing page. allows customers to visit the app and make appointment 
//or see articles. also available after login for user to book clients 
//the appointments.

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Container
          style={{
            flex: 1,
            width: "50%",
            //   alignContent: "center",
          }}
        >
          <p>
            <a href="/buyer" class="btn btn-dark">
              Buy
            </a>{" "}
            &nbsp;
            <a href="/seller" class="btn btn-dark">
              Sell
            </a>
          </p>
      
          &nbsp;
        </Container>
        ); )
      </React.Fragment>
    );
  }  }

export default HomePage;
        