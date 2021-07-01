import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {CurrentUserContext} from '../../context/current-user/current-user.provider';

import {auth} from '../../firebase/firebase-utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import styled from 'styled-components';


const Header = () => {

    const currentUser = useContext(CurrentUserContext);

    return(

        <StyledHeader>
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>

            
                <div className="options">
                    <Link className="option" to="/shop">SHOP</Link>
                    <Link className="option" to="/contact">CONTACT</Link>
                    {
                        currentUser?
                            (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>):
                                <Link className="option" to="/signin">SIGN IN</Link>
                    }

                    <CartIcon />

                </div>
                    
                <CartDropdown />

        </StyledHeader>
    )
};

const StyledHeader = styled.div`

    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }

    .logo-container {
        height: 100%;
        width: 70px;
        padding: 25px;

        @media screen and (max-width: 800px) {
            width: 50px;
            padding: 0;
        }
    }

    .options {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media screen and (max-width: 800px) {
            width: 80%;
        }

        .option {
            padding: 10px 15px;
            cursor:pointer;
        }
    }

`;

export default Header;