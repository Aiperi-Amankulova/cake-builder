import React from "react";
import classes from "./NavigationItem.module.css";

export default ({ children, url, active }) => {
  return (
    <div className={classes.NavigationItem}>
      <li>
        <a href={url} classes={active ? classes : active}>
          {" "}
          {children}
        </a>
      </li>
    </div>
  );
};
