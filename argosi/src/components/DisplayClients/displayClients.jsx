import React from "react";
import { Table, Card, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";


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
                <Card.Title>
                  {clients.first_name} {clients.last_name}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Client Detail
                </Card.Subtitle>
                <Card.Text>
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
            }

export default DisplayClients;

// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Badge, Container } from "react-bootstrap";

// const DisplayClients = (props) => {
//   const [clients, setClients] = useState([]);

//   useEffect(() => {
//     getClient();
//   }, [props.clientId]);

//   const getClient = async () => {
//     const jwt = localStorage.getItem('token')
//         let response = await axios.get('http://127.0.0.1:8000/api/clients/all/${props.clients}', { headers: { Authorization: 'Bearer ' + jwt } })
//         setClients(response.data)
//     }

//   return (
//     <React.Fragment>

//             <Container }>
//                 {clients.map((element) =>
//                     <div key={clients} className="card mb-3" style={{ width: '500px', height: '400px',padding: '5px'}}>
//                         <div className="row no-gutters">
//                            <div className="col-md-8">
//                                 <div className="card-body">
//                                     <h2 align ="right" className="card-title">{element.book_title}</h2>
//                                     <h5 align="right">{element.book_author}</h5>
//                                     <p align="right">ISBN: {element.book_isbn}</p>
//                                     <div align="right" style={{width: '200px', flexWrap: "wrap", justifyContent: "space-evenly"}}>
//                                         <p align="right"> <Badge pill bg="dark">{element.book_genre}</Badge> &nbsp;

//                                             <Badge pill bg="dark">{element.client}</Badge> &nbsp;
//                                             {element.special_edition === true ? (
//                                             <Badge pill bg="dark">Special Edition</Badge>
//                                         ) : ''} &nbsp;

//                                             </p>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                         <br></br>
//                     </div>
//                 )}
//                 </Container>
//         </React.Fragment>
//     );
// }

// export default DisplayClients;

// export default class ListClients extends React.Component {
//   state = {
//     clients: []
//   }

//   componentDidMount() {
//     axios.get(`http://127.0.0.1:8000/api/auth/clients/`).then((response) => {
//       const clients = response.data;
//       this.setState({ clients });
//     });
//   }

//   render() {
//     return (
//       <ul>
//         {
//           this.state.clients
//           .map(client =>
//             <li key={client.id}>{client.name}</li>
//             )
//         }
//       </ul>
//     )
//   }
// }

// import React, {useState, useEffect} from 'react'
// import axios from 'axios';

// export default function ListClients({clients}) {
//     return (
//       <div>
//         <ul>
//           {clients.map((clients) => (
//             <li key={clients.id}>
//               Title:
//               <span>{clients.first_name}</span>
//               Artist:
//               <span>{clients.last_name}</span>
//               Album:
//               <span>{clients.dob}</span>
//               Genre:
//               <span>{clients.email}</span>
//               Release Date:
//               <span>{clients.birth_zip}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//           }

// export default ListClients;
