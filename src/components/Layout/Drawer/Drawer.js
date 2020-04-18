import React from 'react'; 
import classes from './Drawer.module.css';
import Logo from '../../UI/Logo/Logo'; 
import Navigation from '../../Toolbar/Navigation/Navigation';

export default () => {
    return (
      <div className={classes.Drawer}> 
        <Logo/> 
        <Navigation/>
      </div>
    );
  }

