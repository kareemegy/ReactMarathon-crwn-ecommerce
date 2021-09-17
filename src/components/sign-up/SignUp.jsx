import React, { Component } from "react";
import { createUserProfilerDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import { auth } from "../../firebase/firebase.utils";
import "./SignUp.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password don'n match  ");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfilerDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("here", error);
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">
          i'm do not have account
          <span>Sign Up with Your Email And Password</span>
        </h2>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            label="password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={this.handleChange}
            label="confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
