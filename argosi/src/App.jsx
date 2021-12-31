import { Router, Routes, Route } from "react-router-dom";
import {Component} from 'react'
import {Container} from 'react-bootstrap'
import jwtDecode from 'jwt-decode'
import Login from "./components/Login/login"
import Navigation from "./components/Navigation/navigation";
import HomePage from "./components/HomePage/homePage";
import Logout from "./components/Logout/logout";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
        }
    }

    componentDidMount(){
        const jwt = localStorage.getItem('token');
        try {
            const user = jwtDecode(jwt);
            this.setState({
                user,
            })
        }   catch {}
    }

    render() {
        const user = this.state.user;

        return (
            <Container>
                    <Navigation user={user}/>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>

            </Container>
        )
    }
}

export default App;
// -create client list page
// -create client details page
// -create calendar page-->api
