import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import "./RegistrationPage.scss";
const RegistrationPage = () => {
  return (
    <div className="registration">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default RegistrationPage;
