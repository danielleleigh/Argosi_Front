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
        <Container>
          <Carousel fade style={{ padding: "10%" }}>
            <Carousel.Item>
              <img className="d-block w-100" src="/article1.png" alt="" />
              <Carousel.Caption>
                <h3
                  style={{
                    color: "white",
                    fontFamily: "Sunroll-Bold",
                    textShadow: "50%",
                    fontWeight: "bold",
                  }}
                >
                  'Release These 4 Unhealthy Patterns Under The Pisces Full Moon
                  To Achieve Your Heart’s Desire'
                </h3>
                <h4>
                  <a
                    style={{
                      color: "#FFC4C1",
                      fontFamily: "Blanka-Regular",
                      letterSpacing: "15px",
                    }}
                    href="https://www.astrotaylormoon.com/post/release-these-4-unhealthy-patterns-under-the-pisces-full-moon-to-achieve-your-heart-s-desire"
                  ></a>
                </h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/taylorarticle.jpeg"
                alt="City Bureau"
              />
              <Carousel.Caption>
                <h3
                  style={{
                    color: "#0E162C",
                    fontFamily: "MoonwildDecorative",
                    fontWeight: "bold",
                  }}
                >
                  "Spiritual Healing at the Center of Self-Empowerment"
                </h3>
                <h4>
                  <a
                    style={{
                      color: "#FFC4C1",
                      fontFamily: "MoonwildDecorative",
                      fontWeight: "bold",
                    }}
                    href="https://www.citybureau.org/newswire/2021/5/17/spiritual-healing-at-the-center-of-self-empowerment"
                  >
                    Read Article
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
                    color: "#0E162C",
                    fontFamily: "MoonwildDecorative",
                    fontWeight: "bold",
                  }}
                >
                  "Good Morning, Mercury Retrograde!"
                </h3>
                <h4>
                  {" "}
                  <a
                    style={{
                      color: "#D4A58B",
                      fontFamily: "MoonwildDecorative",
                      fontWeight: "bold",
                    }}
                    href="https://parade.com/1102906/taylormoon/what-is-mercury-retrograde/"
                  >
                    Read Article
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
        