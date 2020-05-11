import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../UI/Logo/Logo";
import DrawerToggle from "../Drawer/DrawerToggle/DrawerToggle";
import Nav from "../../UI/Nav/Nav";

export default ({ toggleDrawer }) => {
  return (
    <div className={classes.Toolbar}>
      <Logo />
      <nav>
        <Nav />
      </nav>
      <DrawerToggle toggleDrawer={toggleDrawer} />
    </div>
  );
};
