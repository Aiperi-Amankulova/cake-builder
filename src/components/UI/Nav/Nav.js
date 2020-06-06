import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.css";
import { useSelector } from "react-redux";

export default () => {
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  return (
    <div className={classes.Nav}>
      <ul>
        <NavItem url="/builder"> Cake Builder</NavItem>
        {isAuthenticated ? <NavItem url="/orders">Orders</NavItem> : null}
        {!isAuthenticated ? <NavItem url="/auth">Authenticate</NavItem> : null}
        {isAuthenticated ? <NavItem url="/logout">Logout</NavItem> : null}
      </ul>
    </div>
  );
};
