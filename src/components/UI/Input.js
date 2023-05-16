import classes from "./Input.module.css";

/* extract input into a resuable pre-styled input component -> could be used in multiple parts
of the application */
const Input = (props) => {
  return (
    <div className={classes.input}>
      {/* Label text should be configurable, therefore the text output here is props.label. Its 
      up to me which prop name I;m expecting this on. */}
      {/* htmlFor prop also set -> (to set the for attribute) -> here point at props.input.id. My 
      component -> I can decide what kind of props I expect, and which structure these porps should
      have. */}
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* curly braces -> then use spread operator to spread props.input. This ensures the key value
      pairs in this input object (which we receive on props input, are added as props to input. */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
