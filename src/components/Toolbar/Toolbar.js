import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Layout/Logo/Logo';
import Nav from './Nav/Nav';

export default () => {
    return (
      <div className= { classes.Toolbar}> 
       <Logo/>
       <Nav/>
      </div>
    );
  }

