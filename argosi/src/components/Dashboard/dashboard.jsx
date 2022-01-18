import React, { Component } from "react";
import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";
import SchedulerCalendar from "scheduler-calendar";
import "scheduler-calendar/dist/index.css";

//user dashboard. hold calendar that will show appointments

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            textDecoration: "underline",
            color: "#FFC4C1",
            fontFamily: "MoonwildDecorative",
            fontWeight: "bold",
            paddingTop: "1%",
            paddingBottom: "75px",
          }}
        >
          Appointment Book
        </h1>

        <div
          style={{ marginLeft: "20%", paddingTop: "1%", paddingLeft: "10%" }}
        >
          <ReactEmbeddedGoogleCalendar 
            publicUrl="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&showNav=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=YXJnb3NpMjAyMkBnbWFpbC5jb20&color=%23039BE5"
            style="border-width:0" 
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
            marginLeft="10%"
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
