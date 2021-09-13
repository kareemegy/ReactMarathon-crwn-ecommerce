import React from "react";
import HomePage from "./pages/homepage/HomePage";
import { Switch, Route } from "react-router-dom";
import "./App.css";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS</h1>
      <button onClick={() => props.history.push("/topics/154", "ahmed")}>
        Topics
      </button>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
