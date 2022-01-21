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
          }}
        >
          Appointment Book
        </h1>

        <div style={{ marginLeft: "20%", paddingTop: "1%" }}>
          <ReactEmbeddedGoogleCalendar
            publicUrl="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK&src=YXJnb3NpMjAyMUBnbWFpbC5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043"
            style="border-width:0"
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
          />
        </div>
      </div>
    );
  }
}
export default Dashboard;
