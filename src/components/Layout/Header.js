/* using fragmenet component as wrapper for two blocks of code that are at same level, because
I must only have one root element returned */
import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
/* can import images like css files in react */
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      {/* Sibling component 1 */}
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        {/* Here lets expect we have an onClick prop -> but its up to me. Using this name which is the 
        built in onClick -> because I in the end want to react to the button being clicked. */}
        {/* But technically -> can use any name I want because I will have to write code inside of 
        HeaderCartButton to handle this prop anyway. */}
        {/* To this prop I want to pass a pointer to that function I'm recieving on props 
        onShowCart here. */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* Sibling component 2 */}
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
