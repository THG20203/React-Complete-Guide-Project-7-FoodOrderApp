import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

/* this function will recieve some props */
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        /* Input prop -> should itself hold an object. 
        One pair of curly braces, (to evaluate a JavaScript expression which is passed in as a value).
        Then that expression just happens to be a JavaScript object. */
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
