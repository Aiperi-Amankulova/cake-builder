import React from 'react';
import Toolbar from '../Toolbar/Toolbar'; 
import classes from './Layout.module.css'; 
import Drawer from '../Layout/Drawer/Drawer';

export default ({children}) => {
    return (
      <div className= {classes.Layout}> 
       <Toolbar/>  
       <Drawer/>
       {children}
      </div>

    );
  }

