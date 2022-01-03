import React, { Component } from "react";

class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      sun_sign: "",
      moon_sign: "",
      rising_sign: "",
      birth_zip: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNewClient(this.state);
  };

  render() {
    return (
      <div>
        <h4>Add A Client</h4>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>First Name: </label>
          <input
            type="name"
            name="first_name"
            onChange={this.handleChange}
            value={this.state.first_name}
          />
          <label>Last Name: </label>
          <input
            type="name"
            name="last_name"
            onChange={this.handleChange}
            value={this.state.last_name}
          />
          <label>Email: </label>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label>Sun Sign: </label>
          <input
            type="text"
            name="sun_sign"
            onChange={this.handleChange}
            value={this.state.sun_sign}
          />
          <label>Moon Sign: </label>
          <input
            type="text"
            name="moon_sign"
            onChange={this.handleChange}
            value={this.state.moon_sign}
          />
          <label>Rising Sign: </label>
          <input
            type="text"
            name="rising_sign"
            onChange={this.handleChange}
            value={this.state.rising_sign}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddClient;
