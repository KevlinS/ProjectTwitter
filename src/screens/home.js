import React from 'react';
import { Link } from 'react-router-dom'
import Tweet from '../components/tweet'
import styled from 'styled-components'



const Home = props => {
    console.log('Home => props', props)
    const username = localStorage.getItem('username')
    return (
        <StyledContainer>
            <h1>Hello {username} !</h1>
            <Tweet></Tweet>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export default Home;