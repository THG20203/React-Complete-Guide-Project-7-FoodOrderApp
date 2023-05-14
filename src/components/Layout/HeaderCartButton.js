/* only using the header cart component in the header.js file, but don't want to make file 
bloated, so going to use common convention of creating a seperate file */

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {/* At the moment - 3 - no logic for hard coding */}
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
