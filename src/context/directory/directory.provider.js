import React, {createContext} from 'react';

import sectionsData from './directory.data';

export const DirectoryContext = createContext(sectionsData);

const DirectoryProvider = ({children}) => {
    return(
        <DirectoryContext.Provider value={sectionsData}>
            {children}
        </DirectoryContext.Provider>
    );
};

export default DirectoryProvider;
