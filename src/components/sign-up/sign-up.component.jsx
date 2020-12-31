import React from 'react';
import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''

        }
    }


    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;  // here we need to distructure our values from our state 
        
        if (password !== confirmPassword) {
            alert("Password dont match")
            return; // if password dont match then dont return anything
        }

        try {
        // Creates a new user account associated with the specified email address and password. and destructure the user 
            const { user } = await auth.createUserWithEmailAndPassword (email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '' 
            });
        // when everything is done then reset everything as initial
        }
        catch (error) {
            console.error(error);
        }

        this.setState({ email: '', password: ''});
    };

    // here we sent the values
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value}); 
    };

    render() {
    
    const { displayName, email, password, confirmPassword } = this.state;  // here we need to distructure our values from our state 

    return(
        <div className= 'sign-up'>
            <h1 className = 'title'>I do not have an acount</h1>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit = {this.handleSubmit} > 
                
                <FormInput 
                name = 'displayName' 
                type = 'text' 
                value = {displayName} 
                handleChange={this.handleChange} 
                label = 'Display Name'
                required />
                
                <FormInput 
                name = 'email' 
                type = 'email' 
                value = {email} 
                handleChange={this.handleChange} 
                label = 'Email'
                required />

                <FormInput 
                name = 'password' 
                type = 'password' 
                value = {password} 
                handleChange={this.handleChange} 
                label = 'Password'
                required />
               
               <FormInput 
                name = 'confirmPassword' 
                type = 'password' 
                value = {confirmPassword} 
                handleChange={this.handleChange} 
                label = 'Confirm Password'
                required />
              
                <CustomButton type = 'submit' > Sign In</CustomButton> 

            </form>

        </div>
    );
}

}
export default SignUp;