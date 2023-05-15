import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  /* keeping return statement lean -> so adding a helper const. meal return JSX element which represents
  this item. New can map our DUMMY_MEALS to a meal item instead of a list item. */
  /* add a key to MealItem -> with a key of meal.id cause even dummy meal meal has an id. I will alsp pass 
  in the name prop, because in MealItem I am accessing the name. I'm also accessing description and price,
  so will pass in the name with meal.name, description with meal.description and the price -> with
  meal.price. */
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      {/* Outputting meals list - want card to wrap unordered list */}
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
