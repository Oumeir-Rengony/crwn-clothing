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
<<<<<<< HEAD
        <StyledWrapper>
            <div className="header">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
=======

        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>

            
>>>>>>> ContextApi
                <div className="options">
                    <Link className="option" to="/shop">SHOP</Link>
                    <Link className="option" to="/contact">CONTACT</Link>
                    {
                        currentUser?
                            (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>):
                                <Link className="option" to="/signin">SIGN IN</Link>
                    }
<<<<<<< HEAD
                    <CartIcon />
                </div>
                    
                <CartDropdown />
            </div>
        </StyledWrapper>
    );
=======

                    <CartIcon />

                </div>
                    
                <CartDropdown />

        </div>
    )
>>>>>>> ContextApi
};

const StyledWrapper = styled.div`
    .header {
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;

        .logo-container {
            height: 100%;
            width: 70px;
            padding: 25px;
        }

        .options {
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .option {
            padding: 10px 15px;
            cursor:pointer;
            }
        }
    }
`;

export default Header;