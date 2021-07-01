import React, { useContext, lazy, Suspense, useEffect} from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';
import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import ErrorMessage from './components/error-message/error-message.component';


import { CurrentUserContext } from './context/current-user/current-user.provider';
import {CartContext} from './context/cart/cart.provider';


import './App.scss';


const HomePage = lazy(() => import('./Pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./Pages/shop/shop.component'));
const CheckOutPage = lazy(() => import('./Pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() => import('./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));


const App = () => {

  const currentUser = useContext(CurrentUserContext);
  const { HideCartOutofFocus } = useContext(CartContext);


  useEffect(()=> {
    const isCartOutofFocus = (event) => {
      const element = event.target;

      if(element.closest("#cart_dropdown") === null){
        HideCartOutofFocus();
      }
    };

    window.addEventListener("click", isCartOutofFocus);
    return () => {
      window.removeEventListener("click", isCartOutofFocus);
    }

  }, [HideCartOutofFocus]);

  return (

    <div>
      <Header />
  
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/shop">
              <ShopPage />
            </Route>
            <Route path="/checkout">
              <CheckOutPage />
            </Route>
            <Route path="/signin">
              {
                currentUser? <Redirect to="/" /> : <SignInAndSignUpPage />
              } 
            </Route>
            <Route path="*">
              <ErrorMessage error="Sorry, page not found" />
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>

    </div>
  );
};

export default App;
