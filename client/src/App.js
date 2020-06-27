import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Choice from "./pages/Choice";
import Cooks from "./pages/Cooks";
import Eater from "./pages/Eater";
import NoMatch from "./pages/NoMatch";

import "./App.css";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Choice} />
            <Route exact path="/cooks" component={Cooks} />
            <Route exact path="/eater" component={Eater} />
            <Route component={NoMatch} />
          </Switch>
        </div>


      </Router>
      
    );
  }
}

export default App;
