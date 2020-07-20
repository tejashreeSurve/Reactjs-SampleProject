import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginForm from '../Component/LoginForm.jsx';
import SignUpForm from '../Component/SignUpForm.jsx';
import User from '../Component/User.jsx';


const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/users" component={User} />
            <Route path="/login" component={LoginForm} />
            <Route path="/addUser" component={SignUpForm} />
        </BrowserRouter>
    );
};

export default Router;