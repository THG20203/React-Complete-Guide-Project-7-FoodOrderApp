import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

/* expecting props */
const Cart = (props) => {
  /* cart items -> want to map cartItems to cartItems JSX elements. */
  const cartItems = (
    /* <ul> element wrapping the mapped cartItems */
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {/* cart items from above rendered here in the JSX */}
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
