import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase-utils';

import styled from 'styled-components';

const SignUp = () => {
    
    const defaultUserAccount = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const [userAccount, setUserAccount] = useState(defaultUserAccount);

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

            setUserAccount(defaultUserAccount);
        }
        catch(error){
            console.log(error);
        }
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setUserAccount(prevState =>{
            return {
               ...prevState,
               [name]: value 
            }
        });
    };

    

    return(
        <StyledSignupWrapper>
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
                <CustomButton type="button">SIGN UP</CustomButton>
            </form>
        </StyledSignupWrapper>
    );
};

const StyledSignupWrapper = styled.div`

    display: flex;
    flex-direction: column;
    width: 380px;

    & form{
        width: 100%;
    }

    @media screen and (max-width: 800px){
        width: 75%;
        align-items: center; 
    }

    .title {
        margin: 10px 0;
    }

    button{
        margin: 0 auto;
    }
`;

export default SignUp;