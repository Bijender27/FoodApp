import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

function MealsItem(props) {
    const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.discription}>{props.discription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm/>
      </div>
    </li>
  );
}

export default MealsItem