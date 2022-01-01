import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DisplayClients = (props) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClient();
  }, [props.clientId]);

  const getClient = async () => {
    const jwt = localStorage.getItem('token')
        let response = await axios.get('http://localhost:8000/library/library/', { headers: { Authorization: 'Bearer ' + jwt } })
        setBooks(response.data)
    }

  return (
    <React.Fragment>
            <div >
                <div style={{paddingTop:"10%"}}/>
                <Container style={{paddingTop: '20px', paddingBottom: '20px', backgroundColor: "#d9ccc1"}}>
                    <h1 align="center">Library</h1>
                </Container>
            <Container style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                {books.map((element, index) =>
                    <div key={index} className="card mb-3" style={{ width: '500px', height: '400px',padding: '5px'}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={element.book_cover} onError={'book-app/src/static/background.png'} style={{paddingTop:'10px', paddingLeft:'10px'}}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 align ="right" className="card-title">{element.book_title}</h2>
                                    <h5 align="right">{element.book_author}</h5>
                                    <p align="right">ISBN: {element.book_isbn}</p>
                                    <div align="right" style={{width: '200px', flexWrap: "wrap", justifyContent: "space-evenly"}}>
                                        <p align="right"> <Badge pill bg="dark">{element.book_genre}</Badge> &nbsp;
                                            
                                            <Badge pill bg="dark">{element.book_format}</Badge> &nbsp;
                                            {element.special_edition === true ? (
                                            <Badge pill bg="dark">Special Edition</Badge>
                                        ) : ''} &nbsp;
                                            {element.first_edition === true ? (
                                            <Badge pill bg="dark">First Edition</Badge> 
                                        ) : ''} &nbsp;
                                            {element.signed === true ? (
                                            <Badge pill bg="dark">Signed</Badge>
                                        ) : ''} &nbsp;
                                            {element.book_series === true ? (
                                                    <Badge pill bg="dark">{element.series_name}</Badge>
                                                ): ''}
                                                {element.read_status === true ? (
                                                    <Badge pill bg="dark">Read</Badge>
                                                ): ''} 
                                            </p>
                                    </div>    
                                                                        
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <Container style={{justifyContent: "flex-start"}}>
                            <RelatedPopover /> &nbsp; <Button variant="danger" onClick={(e) => removeBook(e, element.id)}>Remove from Library</Button>
                        </Container>
                    </div> 
                )}
                </Container>                            
            </div>
        </React.Fragment>
    );
}
  )
}


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
