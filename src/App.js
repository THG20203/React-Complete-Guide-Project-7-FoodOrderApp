import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

/* We need to manage some state -> cause have several states now. One where the cart is
visible, and one state where its not visible */
/* Whenever you have more than 1 state -> manage it with react */
/* Importing useState in the App.js file cause thats where we render the cart */
/* Of course we could also do it in some parent component and pass down the states data from 
props, but the only parent component to the app component is index -> thats not even a component. */

function App() {
  /* use destructuring to pull out the two elements I get back from calling useState. Initial state
  is false because that is my cartIsShown state, also have a setCartIsShown function. */
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    /* set cart is shown -> set it to true */
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {/* Wrapping Card in curly braces (to evaluate a dynamic expression) to render it conditionally */}
      {/* Using && to render cart if cartIsShown is truthy, and not render it if its falsy */}
      {/* Cart will go cause initially its false. */}
      {cartIsShown && <Cart />}
      {/* showCartHandler should be called whenever button is clicked. The button is part of the header, 
      therefore we should probably expect to get that function -> the showCartHandler function called from
      inside the header. For header to call function -> pass a pointer to it -> through props. */}
      {/* Convention is to use on -> cause these are like custom events. I'm naming it onShowCart (name is
        up to me -> point at the showCartHandler) */}
      {/* So in header component, we recieve the onShowCart prop (which points at showCartHandler). And now 
      I'm forwarding that pointer at that function to the onClickProp on the header cart button. */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
