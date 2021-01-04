import React from 'react';
import { Link } from 'react-router-dom'

const Home = props => {
    console.log('Home => props', props)
    return (
        <div>
            <p>home</p>
            <p>{props.match.params.id}</p>
            <Link to='/'>To Login</Link>
        </div>
    );
};

export default Home;