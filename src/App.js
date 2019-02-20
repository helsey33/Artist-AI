import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Demo from "./components/Demo/Demo";
import Summary from "./components/Demo/Summary";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/demo" component={Demo} />
          <Route path="/summary" component={Summary} />
        </div>
      </Router>
    );
  }
}

export default App;
