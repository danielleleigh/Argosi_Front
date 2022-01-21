import React from "react";
import { Table, Card, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

//cards displaying client info from backend

const DisplayClients = (props) => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    getClients();
  }, [props.client]);
  const getClients = async () => {
    let response = await axios.get(`http://127.0.0.1:8000/api/clients/`);
    setClients(response.data);
    console.log(clients);
  };
  return (
    <React.Fragment>
      {/* <img src="/clients.png" style={{resize=""}} /> */}
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "#FFC4C1",
            fontFamily: "MoonwildDecorative",
            fontWeight: "bold",
            padding: "2%",
            textDecoration: "underline",
          }}
        >
          Clients
        </h1>
      </div>
      {clients.map((clients) => {
        return (
          <Container
            style={{
              flex: 1,
              width: "50%",
              //   alignContent: "center",
            }}
          >
            <Card
              style={{
                width: "40rem",
                background: "#0E162C",
                // opacity: 0.5,
                padding: "10%",
                border: "solid",
                borderColor: "#131313",
                color: "whitesmoke",
              }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title style={{ fontFamily: "MoonwildDecorative" }}>
                  <h1>
                    {clients.first_name} {clients.last_name}
                  </h1>
                </Card.Title>
                <Card.Subtitle
                  style={{ fontFamily: "MoonwildDecorative" }}
                  className="mb-2 text-muted"
                >
                  Client Detail
                </Card.Subtitle>
                <Card.Text
                  style={{ fontFamily: "MoonwildDecorative", fontSize: "16px" }}
                >
                  {clients.email} <br />
                  {clients.sun_sign} <br />
                  {clients.moon_sign} <br />
                  {clients.rising_sign} <br />
                  {clients.appointment} <br />
                  {clients.appointment_time} <br />
                  {clients.appointment_detail} <br />
                </Card.Text>
              </Card.Body>
            </Card>
            &nbsp;
          </Container>
        );
      })}
    </React.Fragment>
  );
};
export default DisplayClients;
