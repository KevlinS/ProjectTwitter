import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const HeaderLogout = () => {
  const history = useHistory()
  const isToken = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/')
    window.location.reload(); 
  }

  return (
    <Container>
      {isToken ? (
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      ) : (
        null
      )}
    </Container>
  )
}

const LogoutButton = styled.button`
  padding: 12px;
  background-color: green;
`

const Container = styled.div`
  background-color: red;
`

export default HeaderLogout