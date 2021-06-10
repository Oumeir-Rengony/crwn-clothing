import React, {createContext, useState, useEffect} from 'react';

import {auth, createUserProfileDocument} from '../../firebase/firebase-utils';

export const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        let unsubscribeFromAuth = null;
        unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
            userRef.onSnapshot(snapShot => {
             setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
            });
          }
          setCurrentUser(userAuth);
        });
    
        return () => unsubscribeFromAuth();
      }, []);

    return(
        <CurrentUserContext.Provider value={currentUser}>
            {children}
        </CurrentUserContext.Provider>
    );
}

export default CurrentUserProvider;