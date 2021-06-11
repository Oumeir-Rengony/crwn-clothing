import React, { useContext, lazy, Suspense} from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';
import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { CurrentUserContext } from './context/current-user/current-user.provider';

import './App.scss';


const HomePage = lazy(() => import('./Pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./Pages/shop/shop.component'));
const CheckOutPage = lazy(() => import('./Pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() => import('./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));


const App = () => {

  const currentUser = useContext(CurrentUserContext);

  return (

    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
      </Switch>

    </div>
  );
};

export default App;
