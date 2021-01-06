import React, { useState } from 'react'
import styled from 'styled-components'
import { uuid } from 'uuidv4'
import LikeButton from '../likeButton'
import 'font-awesome/css/font-awesome.min.css';

const Tweet = () => {
    
    
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    const submit = (e) =>{
        e.preventDefault()
        const newTodos = {id: uuid(), content: inputValue}
        setTodos([...todos, newTodos])
        setInputValue('')
    }

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }
    const username = localStorage.getItem('username')
    return (
        <div>
            <StyledForm onSubmit={submit}>
                <StyledTextarea placeholder="What's happening?" value={inputValue} 
                onChange={(e) => setInputValue(e.target.value) } 
                type="text"></StyledTextarea>
                <SubmitButton>tweet</SubmitButton>
                
            </StyledForm>
            {todos.map(todo => 
            <StyledBorder>
            <h3>{username}</h3>
            <StyledP key={todo.id}>{todo.content}</StyledP>
            <StyledAd>
                <a onClick={() => deleteTodo(todo.id)}>delete</a> 
                <LikeButton></LikeButton>
            </StyledAd>
            
            </StyledBorder>
            )}
            
        </div>
    );
};

const StyledBorder = styled.div`
    -webkit-box-shadow: 0px 10px 10px 5px rgba(0,0,0,0.82); 
    box-shadow: -5px 10px 10px 5px rgba(8,144,247,1);
    
    background-color:white;
`

const StyledP = styled.p`
    font-size: 20px;
`

const StyledAd = styled.div`
    display: flex ;
    justify-content: space-between;
    margin-bottom: 12px;
    font-size: 15px;
    cursor: pointer;
    user-select: none;
    padding: 15px;
`

const SubmitButton = styled.button`
transition: 0.3s;
background-color:#50abf1;
border-radius: 5% 50% 50% 5%;
font-size: 16px;
align-self: flex-end;
color:white;
&:hover {
  background: #0890f7;
  box-shadow: inset 0 0 0 36px var(--btn-bg);
  
}
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
 
`

const StyledTextarea = styled.textarea`
float: left;
width: 100%;
min-height: 75px;
border: 1px solid grey;
color: #1a73e8;
`

const StyledSpan = styled.span`
    color: green;
    margin-bottom: 12px;
`

export default Tweet;