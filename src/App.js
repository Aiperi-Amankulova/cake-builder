import React, { useEffect } from "react";
import Layout from "./containers/Layout/Layout";
import CakeBuilder from "./containers/CakeBuilder/CakeBuilder";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Auth from "./components/Auth/Auth";
import { restore } from "./store/actions/auth";
import { useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    restore(dispatch);
  }, [dispatch]);

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
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/logout">
            <Layout />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};
