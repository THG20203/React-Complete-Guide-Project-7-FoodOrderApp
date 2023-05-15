import classes from "./Card.module.css";

const Card = (props) => {
  return (
    /* props children -> so whatever is passed between the opening and closing tag of the card
  component is in the end used inside of the Card. */
    <div className={classes.card}>{props.children}</div>
  );
};

export default Card;
