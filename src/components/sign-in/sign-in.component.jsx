import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase-utils';

import './sign-in.styles.scss';

const SignIn = () => {
<<<<<<< HEAD

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [userCredentials, setUserCredentials] = useState({email: '', password:''});
=======
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
>>>>>>> ContextApi

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
        <div className="sign-in">
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
        </div>
    );
};

export default SignIn;