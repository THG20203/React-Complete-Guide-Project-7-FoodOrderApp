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
        <HeaderCartButton />
      </header>
      {/* Sibling component 2 */}
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
