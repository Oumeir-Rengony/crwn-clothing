import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event => {

        event.preventDefault();

        // const {value, name} = event.target;

        console.log(email, password);

        setEmail('');
        setPassword('');

    });

    return(
        <div className="sign-in">
            <h2> I already have an account></h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={email}
                    label="email"
                    handleChange={(e) => setEmail(e.target.value)}
                    required
                />
                <FormInput 
                    name="password" 
                    type="password" 
                    value={password}
                    label="password"
                    handleChange={(e) => setPassword(e.target.value)} 
                    required
                />                
                <CustomButton type="submit"> Sign in </CustomButton>
            </form>
        </div>
    );
};

export default SignIn;