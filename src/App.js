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
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
