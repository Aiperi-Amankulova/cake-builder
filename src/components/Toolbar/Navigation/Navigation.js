import React from 'react';
import classes from './Navigation.module.css'; 
import NavigationItem from './NavigationItem/NavigationItem';
 
export default () => {
    return (
      <div className= { classes.Navigation}>  
        
         <ul> 
         <NavigationItem>Cake Builder </NavigationItem>  
            <NavigationItem>Checkout </NavigationItem>  
        </ul>
         
      </div>
    );
  }

