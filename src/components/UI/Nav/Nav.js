import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.css";

export default () => {
  return (
    <div className={classes.Nav}>
      <ul>
        <NavItem url="/builder">Cake Builder</NavItem>
        <NavItem url="/orders">Orders </NavItem>
        <NavItem url="/auth">Authenticate</NavItem>
      </ul>
    </div>
  );
};
