import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// pages for this product
import Homepage from "./views/LandingPage/Homepage";
import Propertydetails from "./views/LandingPage/Propertydetails";
import Login from "./views/LandingPage/login";

var hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={hist}>
    <Switch>
      <Route path="/propertydetails" component={Propertydetails} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Homepage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
