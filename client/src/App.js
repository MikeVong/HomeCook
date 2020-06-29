import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Choice from "./pages/Choice";
import Cooks from "./pages/Cooks";
import Eater from "./pages/Eater";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Choice} />
          <Route exact path="/cooks" component={Cooks} />
          <Route exact path="/eater" component={Eater} />
          <Route exact path="/cooks/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
