import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase-utils';

import './sign-up.styles.scss';

const SignUp = () => {
    
    const defaultUserAccount = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const [userAccount, setUserAccount] = useState(defaultUserAccount);

    // const [userAccount, setUserAccount] = useState({
    //     displayName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    // });

    const {displayName, email, password, confirmPassword} = userAccount;

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("passwords dont match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            // setUserAccount({
            //     displayName: '',
            //     email: '',
            //     password: '',
            //     confirmPassword: ''
            // });
            setUserAccount(defaultUserAccount);
        }
        catch(error){
            console.log(error);
        }
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setUserAccount(prev =>{
            return {
               ...prev,
               [name]: value 
            }
        });
    };

    

    return(
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                    type="text" 
                    name="displayName" 
                    value={displayName} 
                    onChange={handleChange}
                    label="Display Name"
                    required
                >   
                </FormInput>
                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handleChange}
                    label="email"
                    required
                >   
                </FormInput>
                <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handleChange}
                    label="password"
                    required
                >   
                </FormInput>
                <FormInput 
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    onChange={handleChange}
                    label="confirm password"
                    required
                >   
                </FormInput>
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;