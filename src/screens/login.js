import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header'

const Login = props => {
    console.log('Login= => props', props)
    return (
        <div>
            <Header></Header>
            <p>login</p>
           
            <Link to='/home'>To Home</Link>
        </div>
    );
};

export default Login;