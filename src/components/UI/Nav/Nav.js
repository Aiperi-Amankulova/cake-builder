import React from "react";
import  NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.css";

export default () => {
  return (
    <div className={classes.Nav}>
      <ul>
        <NavItem url="/">Cake Builder</NavItem>
        <NavItem url="/checkout">Checkout </NavItem>
      </ul>
    </div>
  );
};
