import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, FormLabel } from "react-bootstrap";

const RegisterUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");

  const newUser = {
    firstname: firstName,
    lastname: lastName,
    username: userName,
    password: password,
    email: email,
    businessname: businessName,
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    let response = await axios.post(
      "http://127.0.0.1:8000/api/auth/register/",
      newUser
    );
    console.log(response.data);
    if (response.request.status === 201) {
      alert("Registration Complete, Please sign in.");
      return (window.location = "/login");
    }
  };

  return (
    <div align="center">
      <h1 color="white">Reg</h1>
      <Container style={{ flex: 1, width: "40%", padding: "10%" }}>
        <FormLabel
          style={{
            color: "white",
            fontSize: "24px",
            backgroundColor: "black",
          }}
        >
          Registration
        </FormLabel>
        <Form id="contact-form" onSubmit={(event) => handleSubmit(event)}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Control
              type="name"
              placeholder="First Name"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
              width="50%"
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicLastName">
            <Form.Control
              type="name"
              placeholder="Last Name"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicUsername">
            <Form.Control
              type="name"
              placeholder="Username"
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicBusiness">
            <Form.Control
              type="text"
              placeholder="Business Name"
              onChange={(event) => setBusinessName(event.target.value)}
              value={businessName}
            />
            &nbsp;
          </Form.Group>
          &nbsp;
          <Button type="submit" variant="dark">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default RegisterUser;
