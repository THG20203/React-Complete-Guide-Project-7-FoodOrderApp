import { Fragment } from "react";

/* importing other two other meals components */
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    /* returning two elements side by side -> one root JSX element so Fragment. */
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
