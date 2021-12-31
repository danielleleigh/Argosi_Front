// import React from 'react'
// import axios from 'axios'


// const ListClients = (props) => {
//   return (
//     <React.Fragment>
//       <table>
//         <thead>
//           <td>Client List</td>
//         </thead>
//         <tbody>
//           <tr>
//             {
//               props.clientList.map((clients) => {
//                 return (
//                   <React.Fragment key={clients.id.clientID}>
//                     <tr>
//                       <td>{clients.first_name}</td>
//                       <td>{clients.last_name}</td>
//                     </tr>
//                   </React.Fragment>
//                 );
//               })
//             }
//           </tr>
//         </tbody>
//       </table>
//     </React.Fragment>
//   )
// }

// export default ListClients;
// export default class ListClients extends React.Component {
//   state = {
//     clients: []
//   }

//   componentDidMount() {
//     axios.get(`http://127.0.0.1:8000/api/auth/clients/userclients/`)
//       .then(response => {
//         const clients = response.data;
//         this.setState({clients});
//       })
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