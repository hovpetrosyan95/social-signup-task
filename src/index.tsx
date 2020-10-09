import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import "./index.css";
import ROUTES from "./containers/routes";
import store from './store';
import * as serviceWorker from "./serviceWorker";



ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    {
      <Router>
        <Switch>
          {ROUTES.map((route, idx) => (
            // eslint-disable-next-line  react/no-array-index-key
            <Route
              exact={route.exact}
              key={idx}
              path={`${route.path}`}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    }
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
