import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Css/LoginForm.css';
import { Container, Avatar, TextField, Button, Typography, CssBaseline, Grid, Link, IconButton, InputAdornment } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import HeaderBar from '../Component/HeaderBar.jsx';
import { loginUser } from '../Services/UserServices';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {addNewUser} from '../ReduxConnection/action.jsx';
import {connect} from 'react-redux';
import store from '../ReduxConnection/store.jsx';
import {userDataReducer} from '../ReduxConnection/reducer.jsx';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            password: '',
            showpassword: ''
        };
    }

    axois = event => {
        this.setState({ [event.target.name]: event.target.value, });
    };

    loginForm = event => {
        event.preventDefault();
        let loginData = {};
        loginData.userEmail = this.state.userEmail;
        loginData.password = this.state.password;
        loginUser(loginData).then(response => {
            console.log(response);
            console.log('data', response.data.data);
            console.log('email',loginData.userEmail);
            this.props.add(loginData.userEmail);
            localStorage.setItem('token', response.data.message);
            alert(`Login Successfully`);
            this.props.history.push(`/headerBar/${this.props.name}`);
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
                <form className="loginform" noValidate onSubmit={this.loginForm} >
                    <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address"
                        name="userEmail" autoComplete="userEmail" autoFocus onChange={this.axois} />
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
                    <Button className="loginbutton" type="submit" fullwidth variant="contained" color="primary" >Login</Button>
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

const mapStateToProps = state =>{
    console.log(state.name);
    return{
        name : state.name,
      }
}

const mapDispatchToProps =dispatch =>({
  add : (name) => dispatch(addNewUser(name)),
})
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);