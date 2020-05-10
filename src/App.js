import React from "react";
import Layout from "./containers/Layout/Layout";
import CakeBuilder from "./containers/CakeBuilder/CakeBuilder";
import Checkout from "./containers/Checkout/Checkout";
import "./App.css";

export default () => {
  return (
    <div className="App">
      <Layout>
        <CakeBuilder />
        <Checkout />
      </Layout>
    </div>
  );
};
