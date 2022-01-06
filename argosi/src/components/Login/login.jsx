import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import {Container, Form, Button, FormLabel} from 'react-bootstrap'

const Login = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    postUser(userName, userPassword);
  };

    function validateForm() {
      return userName.length > 0 && userPassword.length > 0;
    }

  const postUser = async (name, password) => {
    let payload = {username: name, password:password};
    let response = await axios.post(
      `http://127.0.0.1:8000/api/auth/login/`,
      payload
    );
      console.log(response.data);
      localStorage.setItem("token", response.data.access);
      window.location = "/"
  };

  return (
    <div>
      <Container style={{ flex: 1, width: "50%", padding: "10px" }}>
        <FormLabel>
          <h1
            style={{
              color: "#0E162C",
              fontFamily: "MoonwildDecorative",
              textShadow: "50%",
            }}
          >
            {" "}
            LOGIN
          </h1>
        </FormLabel>
        <Form id="contact-form" onSubmit={onFormSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Control
              type="text"
              name="userName"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;