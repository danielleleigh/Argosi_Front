import React, { useState, Component } from "react";
import { Form, Button, Container, FormLabel } from "react-bootstrap";
import axios from "axios";
import "./login.css";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    postUser(userName, userPassword);
  };

  const postUser = async (name, password) => {
    let payload = { username: name, password: password };
    let response = await axios.post(
      `http://127.0.0.1:8000/api/auth/login/`,
      payload
    );
    console.log(response.data);
    localStorage.setItem("token", response.data.token);
    window.location = "/";
  };

  return (
    <div align="center" className="login-style">
      <Container style={{ flex: 1, width: "40%", padding: "10%" }}>
        <FormLabel
          style={{
            color: "white",
            fontSize: "24px",
            backgroundColor: "black",
          }}
        >
          Login
        </FormLabel>
        <Form id="contact-form" onSubmit={onFormSubmit}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Control
              type="text"
              name="userName"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicLastName">
            <Form.Control
              type="text"
              name="userPassword"
              placeholder="Password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            &nbsp;
          </Form.Group>
          &nbsp;
          <Button type="submit" variant="dark">
            Submit
          </Button>
        </Form>
      </Container>
      &nbsp;
    </div>
  );
};

export default Login;
