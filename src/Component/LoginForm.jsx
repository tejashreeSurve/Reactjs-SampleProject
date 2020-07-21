import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Css/LoginForm.css';
import { Container, Avatar, TextField, Button, Typography, CssBaseline, Grid, Link,IconButton,InputAdornment } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import HeaderBar from '../Component/HeaderBar.jsx';
import { loginUser } from '../Services/UserServices';
import { Visibility, VisibilityOff } from '@material-ui/icons';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            mName: '',
            lName: '',
            userEmail: '',
            password: '',
            showpassword: ''
        };
    }

    axois = event => {
        this.setState({ [event.target.name]: event.target.value, });
    };

    loginForm () {
        let loginData = {};
        loginData.userEmail = this.state.userEmail;
        console.log(loginData.userEmail);
        loginData.password = this.state.password;

        loginUser(loginData).then(response => {
            console.log(response);
            console.log('data', response.data.data);
            localStorage.setItem('token', response.data.message);
            alert(`Login Successfully`);
            this.props.history.push("/headerBar");
        }).catch(error => {
            console.log(error);
            alert(`Login Failed`);
        });

    };
    render() {
        return <Container className="container" component="main" maxWidth="xs" box>
            <CssBaseline />
            <div className="loginpaper">

                <Avatar className="loginavatar">
                    <PersonIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign-in
                </Typography>
                <form className="loginform" noValidate>
                    <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address"
                        name="userEmail" autoComplete="userEmail" autoFocus  onChange={this.axois}/>
                    <TextField variant="outlined" margin="normal" required fullWidth id="password" label="Password"
                        name="password" autoComplete="password " type={this.state.showpassword ? 'text' : 'password'}
                        onChange={this.axois}
                        InputProps={{
                            endAdornment: (<InputAdornment position="end" style={{ width: '10px' }}>
                                <IconButton onClick={() => this.setState({ showpassword: !this.state.showpassword, })}>
                                    {this.state.showpassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>),
                        }}
                                />
                                <Button className="loginbutton" type="submit" fullwidth variant="contained" color="primary" onClick={() => this.loginForm()}>Login</Button>
                                <Grid Container className="grid">
                                    <Grid item>
                                        <Link href="http://localhost:3000/registerUser" variant="body2">
                                            {"Don't have an account? Sign up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                </form>
            </div>
                <box className="boxname"></box>
        </Container>
    }
}


export default LoginForm