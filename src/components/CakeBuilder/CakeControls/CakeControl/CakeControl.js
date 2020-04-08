import React  from 'react'; 
import classes from './CakeControl.module.css';

export default ({label}) => {
 
    return (
      <div className= { classes.CakeControl }> 
       <button className={classes.less}>Less</button>
       <span className={classes.label}>{label}</span>
       <button className={classes.more}>more</button>
      </div>
    );
  }
 