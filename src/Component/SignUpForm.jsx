import React, { Component } from 'react';
import { Card, TextField, CardContent, Avatar, Button } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import '../Css/SignUpForm.css';
import {addUser} from '../Services/UserServices';

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            mName: '',
            lName: '',
            userEmail: '',
            password: '',
            errors: {}
        };
    }

    axios = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    validateForm = () => {
        let errors = {};
        let formIsValidate = true;
        if (!this.state.fName) {
            errors['fName'] = '*enter first Name';
            formIsValidate = false;
        }
        if (!this.state.mName) {
            errors['mName'] = '*enter Middle Name';
            formIsValidate = false;
        }
        if (!this.state.lName) {
            errors['lName'] = '*enter Last Name';
            formIsValidate = false;
        }
        if (!this.state.userEmail) {
            errors['userEmail'] = '*enter email ';
            formIsValidate = false;
        }
        if (!this.state.password) {
            errors['password'] = '*enter password ';
            formIsValidate = false;
        }
        if (!RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$").test(this.state.userEmail)) {
            errors['password'] = '*enter valide User Email ';
            formIsValidate = false;
        }
        if (!RegExp("(?=.*[0-9])").test(this.state.password)) {
            errors['password'] = '*enter valide password ';
            formIsValidate = false;
        }
        this.setState({
            errors: errors,
        });
        return formIsValidate
    };

    registrationForm () {
        if (this.validateForm ()) {
          let user = {};
          user.fName = this.state.fName;
          user.mName = this.state.mName;
          user.lName = this.state.lName;
          user.userEmail = this.state.userEmail;
          user.password = this.state.password;
          console.log (user);
    
          addUser (user)
            .then (Response => {
              console.log (Response, 'User Registered successfully!!');
              alert (`User Registered successfully`);
            })
            .catch (error => {
              console.log ('Error', error.response);
              console.log (error.response.data.message, 'User Registration failed');
              alert (error.response.data.message);
            });
        }
      };
    
render() {
    return <Card className="signupcard" >
        <CardContent  >
            <div className="signuppage">
                <Avatar className="signupavatar">
                    <PersonAddIcon />
                </Avatar>
                <div className="signupLogin" >
                    <span component="h1" variant="h5"><h4>Sign up</h4></span>
                </div>
            </div>
            <form className="userinfo" noValidate>

                <TextField variant="outlined" margin="normal" required fullWidth id="firstname" label="First Name"
                    name="firstname" autoComplete="firstname" onChange={this.axios}
                    error={this.state.errors.fName}
                    helperText={this.state.errors.fName}></TextField>


                <TextField variant="outlined" margin="normal" required fullWidth  id="middlename" label="Middle Name"
                    name="middlename" autoComplete="middlename" onChange={this.axios}
                    error={this.state.errors.mName}
                    helperText={this.state.errors.mName}></TextField>

                <TextField variant="outlined" margin="normal" required fullWidth  id="lastname" label="Last Name"
                    name="lastname" autoComplete="lastname" onChange={this.axios}
                    error={this.state.errors.lName}
                    helperText={this.state.errors.lame}></TextField>

                <TextField variant="outlined" margin="normal" required fullWidth  id="email" label="Email Address"
                    name="email" autoComplete="email" onChange={this.axios}
                    error={this.state.errors.userEmail}
                    helperText={this.state.errors.userEmail}></TextField>

                <TextField variant="outlined" margin="normal" required fullWidth  id="email" label="Password"
                    name="password" autoComplete="password" type="password" onChange={this.axios}
                    error={this.state.errors.password}
                    helperText={this.state.errors.password}></TextField>

                <Button className="signup" type="submit" fullwidth  variant="contained" color="primary" onClick={() => this.registrationForm()}>Sign-up</Button>

            </form>
        </CardContent>
    </Card >
}
}

export default SignUpForm;