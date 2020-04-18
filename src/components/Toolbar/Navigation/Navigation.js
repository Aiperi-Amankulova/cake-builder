import React from 'react';
import classes from './Navigation.module.css'; 
import NavigationItem from './NavigationItem/NavigationItem';
 
export default () => {
    return (
      <div className= { classes.Navigation}>  
       <NavigationItem>
         <ul> 
           <li url="/">Cake Builder</li>
           <li url="/checkout">Checkout</li>
        </ul>
        
       </NavigationItem>
      </div>
    );
  }

