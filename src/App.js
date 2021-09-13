import React from "react";
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import RegistrationPage from "./pages/registration-page/RegistrationPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signIn" component={RegistrationPage} />
      </Switch>
    </div>
  );
}

export default App;
