import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  /* this const formats the price. It uses a template literal -> backticks -> then output a 
  dollar sign, then special syntax -> ${}. So -> two dollar signs -> one to output the character dollar 
  sign, and one in combination with the curly braces to inject dynamic content into template literal. */
  /* toFixed(2) -> make sure we always render to '2' decimal places */
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        {/* could be props.n, or props.titel etc -> its up to me which prop 'attributes' should later be 
        set on that component. Just need to make sure whatever names I'm using to access the data are the
        prop names I later use in AvailableMeals for passing down the data. */}
        <h3>{props.name}</h3>
        {/* outputting description, therefore accessing a description prop here */}
        <div className={classes.description}>{props.description}</div>
        {/* in price below, don't want to access props.price -> note the const price above */}
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {/* second div -> render simple form which allows users to enter the amount you want to use here,
        the amount of meals you want to add to the Cart and then the add to cart button. */}
        {/* There is an extra component going to add -> */}
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
