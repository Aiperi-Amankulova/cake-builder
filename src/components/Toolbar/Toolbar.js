import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Layout/Logo/Logo'; 
import Navigation from './Navigation/Navigation';

export default () => {
    return (
      <div className= { classes.Toolbar }> 
       <Logo/>
         <nav > 
           <Navigation/>
         </nav>
      
      </div>
    );
  }

