import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selectors';
import {setCurrentUser} from './redux/user/user.actions';

import './App.css';

import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import CheckOutPage from './Pages/checkout/checkout.component';

import {auth, createUserProfileDocument} from './firebase/firebase-utils';

function App() {

  //DISPATCH
  const dispatch = useDispatch();

  //STATE
  const currentUser = useSelector(selectCurrentUser);
    
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }));
        });
      }
      dispatch(setCurrentUser(userAuth));      
    });

    return () => unsubscribeFromAuth();
  }, [dispatch])

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
