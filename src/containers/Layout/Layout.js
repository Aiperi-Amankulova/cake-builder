import React, { useState } from 'react';
import Toolbar from '../../components/Layout/Toolbar/Toolbar'; 
import classes from './Layout.module.css'; 
import Drawer from '../../components/Layout/Drawer/Drawer';

export default ({children}) => {
  const [drawerOpen, setDrawerOpen]=useState( true);

  function toggleDrawer(){
    setDrawerOpen(!drawerOpen);
  }

    return (
      <div className= {classes.Layout}> 
       <Toolbar/>  
       <Drawer open={drawerOpen} toggleDrawer={toggleDrawer}/>
      <main>{children}</main> 
      </div>

    );
  }

