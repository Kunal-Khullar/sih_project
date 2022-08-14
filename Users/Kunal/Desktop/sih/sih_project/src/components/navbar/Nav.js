import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './navbar.css'
const NavHome = () => {
  return (
    <div>
      
        
    
      
       <Navbar className="navbar" bg="clear" expand="lg">
       <Navbar.Brand href="#home" >SIH</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto" style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
       <Nav.Link className='navlink' href="#top">Wallet</Nav.Link>
       <Nav.Link className='navlink' href="#mid">My Certificates</Nav.Link>
       <Nav.Link className='navlink' href="#mid2">Profile</Nav.Link>
       {/* <Nav.Link className='navlink' href="#bot">My sessions</Nav.Link> */}
       </Nav>
      
       </Navbar.Collapse>
       </Navbar>
       </div>
  )
}

export default NavHome