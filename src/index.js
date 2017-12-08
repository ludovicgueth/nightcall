import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Router, Route, Switch } from "react-router";

import createBrowserHistory from "history/createBrowserHistory";

import PageNotFound from "./pages/PageNotFound";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
