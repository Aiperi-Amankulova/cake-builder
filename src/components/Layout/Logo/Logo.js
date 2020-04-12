import React from 'react';
import classes from './Logo.module.css';
import logo from "../../../assets/logo.svg";

export default () => {
    return (
      <div className= { classes.Logo}> 
    <img src={logo} />
    <span>Cake Builder</span>
      </div>
    );
  }

