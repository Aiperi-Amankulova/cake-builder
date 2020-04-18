import React, { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar'; 
import classes from './Layout.module.css'; 
import Drawer from '../Layout/Drawer/Drawer';

export default ({children}) => {
  const [drawerOpen, setDrawerOpen]=useState(false);

    return (
      <div className= {classes.Layout}> 
       <Toolbar/>  
       <Drawer open={drawerOpen} toggleDrawer={()=>{}}/>
      <main>{children}</main> 
      </div>

    );
  }

