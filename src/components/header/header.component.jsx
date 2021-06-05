import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {CurrentUserContext} from '../../provider/current-user/current-user.provider';

import {auth} from '../../firebase/firebase-utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => {

    const currentUser = useContext(CurrentUserContext);

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
                    
                <CartDropdown />

        </div>
    )
};

export default Header;