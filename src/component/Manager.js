import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
class Manager extends Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={Auth}></Route>
          <Route path="/login" component={Home}></Route>
        </Router>
      </>
    );
  }
}

export default Manager;
