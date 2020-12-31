import React from 'react';
import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            
            email: '',
            password: ''

        };
    }

// on submit func that calls method handle submit which prevent the default submit action from firing
// It is beacuse we want a full control of exactly what submit is going to do

// after preventing it we clear out our fields
handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: ''});
};

// here we sent the values
handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value});
};

render () {
    return(
        // for is used to customize components like enail and password
        <div className= 'sign-in'>
            <h1>I already have an acount</h1>
            <span>Sign in with your email and password</span>

            <form onSubmit = {this.handleSubmit} > 
                
                <FormInput 
                name = 'email' 
                type = 'email' 
                value = {this.state.email} 
                handleChange={this.handleChange} 
                label = 'email'
                required />
               

                <FormInput  
                name = 'password' 
                type = 'password' 
                value = {this.state.password} 
                handleChange={this.handleChange} 
                label = 'password'
                required />

              <div className = 'buttons'> 
              
              <CustomButton name = 'submit' > Sign In</CustomButton> 
                <CustomButton onClick = {signInWithGoogle} isGoogleSignIn> {' '} Sign in with Google {' '} </CustomButton> 
              
              </div>
            </form>
        </div>

        );
    }
}


export default SignIn;
