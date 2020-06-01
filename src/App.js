import React from "react";
import Layout from "./containers/Layout/Layout";
import CakeBuilder from "./containers/CakeBuilder/CakeBuilder";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Orders from "./components/Orders/Orders";

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
          <Route path="/orders">
            <Orders />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};
