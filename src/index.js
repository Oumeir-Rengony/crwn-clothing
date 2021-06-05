import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

// import CartProvider from './provider/cart/cart.provider';
// import CurrentUserProvider from './provider/current-user/current-user.provider';
// import DirectoryProvider from './provider/directory/directory.provider';
// import CollectionsProvider from './provider/collections/collections.provider';
import { ContextProvider } from './provider';


import './index.css';
import App from './App';

ReactDOM.render(
  
  // <CurrentUserProvider>
  //   <CollectionsProvider>
  //     <CartProvider>
  //       <DirectoryProvider>
  //         <BrowserRouter>
  //           <App />
  //         </BrowserRouter>
  //       </DirectoryProvider>
  //     </CartProvider>
  //   </CollectionsProvider>
  // </CurrentUserProvider>,

  <ContextProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById('root')
);
