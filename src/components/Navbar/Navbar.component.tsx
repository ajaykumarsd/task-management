import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logout from './Logout/Logout.component'
const NavbarComponent = () => {
  const userDetails = JSON.parse(localStorage.getItem('user')!)
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>Task Management Dashboard</Navbar.Brand>
          <Nav className='justify-content-end'>
            <span
              style={{
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '20px',
              }}
            >
              {userDetails && userDetails?.name || 'John'}
            </span>
            <Logout />
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default NavbarComponent
