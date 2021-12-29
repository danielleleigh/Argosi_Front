import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Login from "./components/Login/login";
import NavBar from "./components/NavBar/navBar";
import HomePage from "./components/HomePage/homePage";
import ListClients from "./components/ClientList/clientList"



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({
        user,
      });
    } catch {}
  }

  render() {
    const user = this.state.user;
    return (
      <div>
        <Router>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userclients" element={<ListClients />} />
          </Routes>
        </Router>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

// -create client list page
// -create client details page
// -create calendar page-->api?
