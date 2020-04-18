import React from 'react'; 
import classes from './Drawer.module.css';
import Logo from '../../UI/Logo/Logo'; 
import Navigation from '../../Toolbar/Navigation/Navigation'; 
import Backdrop from '../../UI/Backdrop/Backdrop';

export default () => {
    return (
      <div className={classes.Drawer}>
        <Backdrop show/>
        <div className={classes.content}> 
           <Logo/> 
           <Navigation/>
        </div>  
      </div>
    );
  }

