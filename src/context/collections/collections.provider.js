import React, {createContext} from 'react';

import SHOP_DATA from './shop.data';

export const CollectionsContext = createContext({
    collections: SHOP_DATA
});

const CollectionsProvider = ({children}) => {
    return (
        <CollectionsContext.Provider value={{collections: SHOP_DATA}}>
            {children}
        </CollectionsContext.Provider>
    );
};

export default CollectionsProvider;