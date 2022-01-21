import { Router, Routes, Route } from "react-router-dom";
import { Component } from "react";
import { Container } from "react-bootstrap";
import jwtDecode from "jwt-decode";
import Login from "./components/Login/login";
import Navigation from "./components/Navigation/navigation";
import HomePage from "./components/HomePage/homePage";
import Logout from "./components/Logout/logout";
import DisplayClients from "./components/DisplayClients/displayClients";
import EmailClient from "./components/Email/email";
import Dashboard from "./components/Dashboard/dashboard";
import Footer from "./components/Footer/footer";

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
      <div
        className="font-face-gm"
        style={{
          background: 'url("/cbpaper.jpg")',
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "fixed",
        }}
      >
        <Container>
          <Navigation user={user} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/clients/" element={<DisplayClients />} />
            <Route path="/email" element={<EmailClient />} />
            <Route path="/dashboard/" element={<Dashboard />} />
          </Routes>
          <Footer />
        </Container>
      </div>
    );
  }
}
export default App;
// -create client list page
// -create client details page
// -create calendar page-->api
