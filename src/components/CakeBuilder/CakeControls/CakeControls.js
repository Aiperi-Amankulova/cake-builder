import React  from 'react'; 
import classes from './CakeControls.module.css';
import CakeControl from './CakeControl/CakeControl';

export default () => {
    const controls = [
        {label: "Chocolate Cream", type: "chocolateCream"},
        {label: "Fruit Cream", type: "fruitCream"},
        {label: "Curd Cream", type: "curdCream"},
        {label: "Protein Cream", type: "proteinCream"}
    ]
 
    const controlsOutput = controls.map(control => 
        <CakeControl label={control.label}/>)

    return (
      <div className= { classes.CakeControls }> 
        {controlsOutput}
      </div>
    );
  }
 