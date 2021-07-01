import React from 'react';

import Directory from '../../components/directory/directory.component';

import styled from 'styled-components';

const HomePage = () => {

    return(
        <StyledWrapper>
            <Directory />
        </StyledWrapper>
    );       
};

const StyledWrapper = styled.div`
    .homepage {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default HomePage