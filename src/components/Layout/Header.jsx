import React from 'react'
import classes from "./Header.module.css"
import HeaderImg from "../../assets/meals.jpg"
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>FoodApp</h1>
        <HeaderCartButton modalOpen={()=>{props.onModalOpen()}}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderImg} alt="Header Image" />
      </div>
    </>
  );
}

export default Header