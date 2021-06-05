import React, {useContext} from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import CheckOutPage from './Pages/checkout/checkout.component';

import { CurrentUserContext } from './provider/current-user/current-user.provider';

import './App.css';


function App() {

  const currentUser = useContext(CurrentUserContext);

  return (

    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/checkout" exact>
          <CheckOutPage />
        </Route>
        <Route path="/signin">
          {
            currentUser? <Redirect to="/" /> : <SignInAndSignUpPage />
          } 
        </Route>
      </Switch>

    </div>
  );
};

export default App;
