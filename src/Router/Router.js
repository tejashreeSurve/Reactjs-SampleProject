import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginForm from '../Component/LoginForm.jsx';
import SignUpForm from '../Component/SignUpForm.jsx';
import User from '../Component/User.jsx';


const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/userList" component={User} />
            <Route path="/loginUser" component={LoginForm} />
            <Route path="/registerUser" component={SignUpForm} />
        </BrowserRouter>
    );
};

export default Router;