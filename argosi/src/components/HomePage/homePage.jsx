import React, { Component } from "react";
import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";
import SchedulerCalendar from "scheduler-calendar";
import {Carousel} from 'react-bootstrap'


class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Carousel fade style={{ padding: "10%" }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/aquariusbook.jpg"
                alt="Aquarius Book"
              />
              <Carousel.Caption>
                <h3
                  style={{
                    color: "white",
                    fontFamily: "MoonwildDecorative",
                    textShadow: "50%",
                    fontWeight: "bold",
                  }}
                >
                  'Astrology is a vital tool for understanding our place in the
                  world and the universal forces that move us. ’
                </h3>
                <h4>
                  <a
                    style={{
                      color: "#FFC4C1",
                      fontFamily: "MoonwildDecorative",
                      fontWeight: "bold",
                    }}
                    href="https://read.amazon.com/kp/embed?asin=B07TTKYZ2P&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_E6WJ44JG1K0VBRNZAEZA"
                  >
                    Purchase "Aquarius" by Taylor Moon
                  </a>
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
          <h3
            style={{
              color: "#0E162C",
              fontFamily: "MoonwildDecorative",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            BOOK WITH TAYLOR MOON 🔮
          </h3>
          <div style={{ alignContent: "center", paddingLeft: "30%" }}>
            <iframe
              src="https://app.squarespacescheduling.com/schedule.php?owner=24990762&calendarID=6383681"
              title="Schedule Appointment"
              width="60%"
              height="800"
              frameBorder="0"
            ></iframe>
            <script
              src="https://embed.acuityscheduling.com/js/embed.js"
              type="text/javascript"
            ></script>
          </div>
        </div>
      </React.Fragment>
    );
}};

export default HomePage;

// export default HomePage;
// import * as React from "react";
// import Paper from "@material-ui/core/Paper";
// import { ViewState } from "@devexpress/dx-react-scheduler";
// import {
//   Scheduler,
//   DayView,
//   Appointments,
// } from "@devexpress/dx-react-scheduler-material-ui";

// const currentDate = "2018-11-01";
// const schedulerData = [
//   {
//     startDate: "2018-11-01T09:45",
//     endDate: "2018-11-01T11:00",
//     title: "Meeting",
//   },
//   {
//     startDate: "2018-11-01T12:00",
//     endDate: "2018-11-01T13:30",
//     title: "Go to a gym",
//   },
// ];

// export default () => (
//   <Paper>
//     <Scheduler data={schedulerData}>
//       <ViewState currentDate={currentDate} />
//       <DayView startDayHour={9} endDayHour={14} />
//       <Appointments />
//     </Scheduler>
//   </Paper>
// 
