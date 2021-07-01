import React, { useContext } from 'react';

import { DirectoryContext } from '../../context/directory/directory.provider';

import MenuItem from '../menu-item/menu-item.component';

import styled from 'styled-components';

const Directory = () => {

    const sections = useContext(DirectoryContext);

    return(
        <StyledDirectoryMenu>
            {
                sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
            }
        </StyledDirectoryMenu>
    )
};

const StyledDirectoryMenu = styled.div`
    
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`;

export default Directory;