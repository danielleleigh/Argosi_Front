import React, { Component } from "react";
import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";
import SchedulerCalendar from "scheduler-calendar";
import "scheduler-calendar/dist/index.css";

class Book extends Component {
  render() {
    return (
      <div>
        <iframe
          src="https://app.squarespacescheduling.com/schedule.php?owner=24990762&calendarID=6383681"
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
        ></iframe>
        <script
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
        >
        </script>

      </div>
      
    );
  }
}

export default Book;
