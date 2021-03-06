import React, { useEffect } from "react";
import Layout from "./containers/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import CakeBuilder from "./containers/CakeBuilder/CakeBuilder";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Auth from "./components/Auth/Auth";
import { restore } from "./store/actions/auth";
import Logout from "./components/Logout/Logout";

export default () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  useEffect(() => {
    restore(dispatch);
  }, [dispatch]);

  let routesOutput = (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/builder" />
      </Route>
      <Route path="/builder">
        <CakeBuilder />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
  if (isAuthenticated) {
    routesOutput = (
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
          <Logout />
        </Route>
      </Switch>
    );
  }

  return (
    <div className="App">
      <Layout>{routesOutput}</Layout>
    </div>
  );
};
