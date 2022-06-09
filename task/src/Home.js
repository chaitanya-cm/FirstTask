import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/weather">Weather</Link>
        </li>
        {/* <li>
          Endpoint to route to Contact Us component
          <Link to="/iconfinder">Iconfinder</Link>
        </li> */}
      </ul>
    </div>
  )
}

export default Home