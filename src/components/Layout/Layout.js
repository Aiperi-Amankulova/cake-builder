import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Drawer from '../Drawer/Drawer';
import classes from './Layout.module.css';

export default ({children}) => {
    return (
      <div className= {classes.Layout}> 
       <Toolbar/>
       <Drawer/> 
       {children}
      </div>

    );
  }

