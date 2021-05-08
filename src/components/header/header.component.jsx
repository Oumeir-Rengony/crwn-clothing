import React from 'react';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {auth} from '../../firebase/firebase-utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => {

    //STATE
    const {currentUser} = useSelector(state => state.user);
    const {hidden: isCartHidden} = useSelector(state => state.cart);

    return(
        <div className="header">
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
            
            {
                isCartHidden ? null : <CartDropdown />
            }
            
            
        </div>
    );
};

export default Header;