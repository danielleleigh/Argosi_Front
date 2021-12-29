import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function ListClients({clients}) {
    return (
      <div>
        <ul>
          {clients.map((clients) => (
            <li key={clients.id}>
              Title:
              <span>{clients.first_name}</span>
              Artist:
              <span>{clients.last_name}</span>
              Album:
              <span>{clients.dob}</span>
              Genre:
              <span>{clients.email}</span>
              Release Date:
              <span>{clients.birth_zip}</span>
            </li>
          ))}
        </ul>
      </div>
    );
          }


// export default ListClients;