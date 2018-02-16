import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import Footer from "./Navigation/Footer";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Stats from "./pages/Stats";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/stats" component={Stats} exact />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
