import React, { Component } from "react";
import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";
import SchedulerCalendar from "scheduler-calendar";
import "scheduler-calendar/dist/index.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ReactEmbeddedGoogleCalendar
          publicUrl="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK&src=YXJnb3NpMjAyMUBnbWFpbC5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043"
          style="border-width:0"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        />
      </div>
    );
  }
}

export default Dashboard;
