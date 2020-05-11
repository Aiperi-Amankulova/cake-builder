import React from "react";
import classes from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

export default ({ children, url }) => {
  return (
    <li className={classes.NavItem}>
      <NavLink to={url} activeClassName={classes.active}>
        {children}
      </NavLink>
    </li>
  );
};
