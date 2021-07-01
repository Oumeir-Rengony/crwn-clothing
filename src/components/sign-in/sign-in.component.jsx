import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase-utils';

import styled from 'styled-components';
// import './sign-in.styles.scss';

const SignIn = () => {

    const [userCredentials, setUserCredentials] = useState({email: '', password:''});

    const handleSubmit = async event => {

        event.preventDefault();

        const {email, password} = userCredentials;

        try{
            await auth.signInWithEmailAndPassword(email, password); 
            setUserCredentials({email: '', password:''});
        }
        catch(error){
            console.log(error);
        }

    };

    const handleInputChange = async event => {
        const {value, name} = event.target;
        setUserCredentials((prevState) => ({...prevState, [name]:value}));
    };

    return(
        <StyledSigninWrapper>
            <h2> I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={userCredentials.email}
                    label="email"
                    handleInputChange={handleInputChange}
                    required
                />
                <FormInput 
                    name="password" 
                    type="password" 
                    value={userCredentials.password}
                    label="password"
                    handleInputChange={handleInputChange} 
                    required
                />
                <div className="buttons">         
                    <CustomButton type="submit"> 
                        Sign in 
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                        Sign in with Google
                    </CustomButton>
                </div>  
            </form>
        </StyledSigninWrapper>
    );
};

const StyledSigninWrapper = styled.div`

    width: 380px;
    display: flex;
    flex-direction: column;

    & form{
        width: 100%;
    }

    @media screen and (max-width: 800px){
        width: 75%;
        align-items: center; 
    }

    .title{
        margin: 10px 0;
    }

    .buttons{
        display:flex;
        justify-content: space-around;
        
        @media screen and (max-width: 600px){
            height: 120px;
            flex-direction: column;
        }
    }
`;

export default SignIn;