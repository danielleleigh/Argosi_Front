import React, { Component } from "react";
import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";
import SchedulerCalendar from "scheduler-calendar";
import { Table, Card, Container, Row, Col, Carousel } from "react-bootstrap";

//landing page. allows customers to visit the app and make appointment 
//or see articles. also available after login for user to book clients 
//the appointments.

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Container
          style={{ width: "1000px", paddingLeft: "10%", textAlign: "center" }}
        >
          <Carousel fade>
            <Carousel.Item>
              <img className="d-block w-100" src="/article1.png" alt="" />
              <Carousel.Caption>
                <h3
                  style={{
                    color: "#EDE6D4",
                    fontFamily: "Blanka-Regular",
                    textShadow: "50%",
                    fontWeight: "bold",
                    fontSize: "20px",
                    letterSpacing: "5px",
                  }}
                >
                  "Release These 4 Unhealthy Patterns Under The Pisces Full
                  Moon"
                </h3>
                <h4>
                  <a
                    style={{
                      color: "#E5CEAD",
                      fontFamily: "Blanka-Regular",
                      letterSpacing: "15px",
                    }}
                    href="https://www.astrotaylormoon.com/post/release-these-4-unhealthy-patterns-under-the-pisces-full-moon-to-achieve-your-heart-s-desire"
                  >
                    Read Here
                  </a>
                </h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/article2.png"
                alt="City Bureau"
              />
              <Carousel.Caption>
                <h3
                  style={{
                    color: "white",
                    fontFamily: "Blanka-Regular",
                    textShadow: "50%",
                    fontWeight: "bold",
                    fontSize: "20px",
                    letterSpacing: "5px",
                  }}
                >
                  "Release These 4 Unhealthy Patterns Under The Pisces Full
                  Moon"
                </h3>
                <h4>
                  <a
                    style={{
                      color: "#FD3F00",
                      fontFamily: "Blanka-Regular",
                      letterSpacing: "15px",
                    }}
                    href="https://www.astrotaylormoon.com/post/5-wellness-tips-for-your-zodiac-sign-during-pisces-season"
                  >
                    Read Here
                  </a>
                </h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/yellowlady.jpg"
                alt="Parade Article"
              />
              <Carousel.Caption>
                <h3
                  style={{
                    color: "#FD3F00",
                    fontFamily: "Blanka-Regular",
                    textShadow: "50%",
                    fontWeight: "bold",
                    fontSize: "20px",
                    letterSpacing: "5px",
                  }}
                >
                  "Good Morning, Mercury Retrograde!"
                </h3>
                <h4>
                  {" "}
                  <a
                    style={{
                      color: "#EC9A93",
                      fontFamily: "Blanka-Regular",
                      letterSpacing: "15px",
                    }}
                    href="https://parade.com/1102906/taylormoon/what-is-mercury-retrograde/"
                  >
                    Read Here
                  </a>
                </h4>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </React.Fragment>
    );
  }  }

export default HomePage;
        