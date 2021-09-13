import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import "./SignIn.scss";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2> i already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="password"
          />
          <input
            type="submit"
            value="Submit From"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SignIn;
