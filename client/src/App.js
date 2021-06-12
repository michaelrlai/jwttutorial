import React, { Fragment } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//components

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch></Switch>
        </div>
      </Router>
    </Fragment>
  );
};

export default App;
