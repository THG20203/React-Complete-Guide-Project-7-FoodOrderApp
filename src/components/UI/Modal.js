import { Fragment } from "react";
/* ReactDom needed for the create Portal method */
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

/* two seperate components -> really closely tied to the modal component and both lean, will 
createv them in the same file. Both components recieve props because both will recieve data */
const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

/* createPortal needs a second argument -> not just what to portal but where to portal - hence 
portalElement const created. */
const portalElement = document.getElementById("overlays");

/* Special kind of markup -> want to use react portal for both my backdrop (behind modal overlay
which blocks interaction with the rest of page) and I also want to render the modal overlay itself 
with react portal. */
/* This is to use the component wherever I want, but render the actual HTML elements in a specific 
place in the DOM tree */
const Modal = (props) => {
  return (
    /* Fragment needed -> have backdrop and overlay side by side */
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        /* props.children -> forward the content between the modal text */
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
