import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            render={(props) => {
              return <h1>Login</h1>;
            }}
          />

          <Route
            path="/root"
            render={(props) => {
              return <h1>Root</h1>;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
