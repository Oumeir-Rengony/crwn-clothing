import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/crown.svg';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51Ipva8H9469zHLMnqX4Jf8FJ0e8qEr16ps8uXZ2Kf1jQMf0Pz7AeaHWPC1UTVeWcNJRJegyoBbAt3aaks7A3dU8r00WD3YLMia";
    
    const onToken = (token) => {
        console.log(token);
        alert("payment succesfull");
    };

    return(
        <StripeCheckout
            label="Pay Now"
            name="CRWN CLOTHING Ltd."
            billingAddress
            shippingAddress
            image={logo}
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;