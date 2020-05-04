import React from "react";
import classes from "./Navigation.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

export default () => {
  return (
    <div className={classes.Navigation}>
      <ul>
        <NavigationItem url="/">Cake Builder </NavigationItem>
        <NavigationItem url="/checkout">Checkout </NavigationItem>
      </ul>
    </div>
  );
};
