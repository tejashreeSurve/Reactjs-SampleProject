import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Css/LoginForm.css';
import { Container, Avatar, TextField, Button, Typography, CssBaseline, Grid, Link } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
class LoginForm extends Component {

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
                        name="email" autoComplete="email" autoFocus />
                    <TextField variant="outlined" margin="normal" required fullWidth id="password" label="Password"
                        name="password" autoComplete="password " type="password" />
                    <Button className="loginbutton" type="submit" fullwidth variant="contained" color="primary" >Sign-In</Button>
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