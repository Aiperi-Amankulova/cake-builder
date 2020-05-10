import React from "react";
import Layout from "./containers/Layout/Layout";
import CakeBuilder from "./containers/CakeBuilder/CakeBuilder";
import Checkout from "./containers/Checkout/Checkout";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

export default () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/builder" />
          </Route>
          <Route path="/builder">
            <CakeBuilder />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};
