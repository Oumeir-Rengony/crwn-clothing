import React, {useContext} from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import CheckOutPage from './Pages/checkout/checkout.component';

import { CurrentUserContext } from './context/current-user/current-user.provider';

import './App.scss';


<<<<<<< HEAD
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
=======
function App() {
>>>>>>> ContextApi

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
