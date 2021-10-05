
import React from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css";

// import { Col } from 'react-bootstrap';

const Header = () => {
    const activeStyle = {
            fontWeight: "bold",
        color: "white",
        }
    return (
        
 <Navbar bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Row className="mx-auto">
                    <Col lg="3" >
                          <NavLink to="/Home" className='navbar-brand ' activeStyle={activeStyle}>
                    <Image src="logo.png"className='logo'  /> </NavLink>
                    </Col>

                    <Col lg="9">
                          
    <Nav className="justify-content-between me-auto" >
    <NavLink to="/Home"  className="navMenu"  activeStyle={activeStyle}>  Home</NavLink>
    <NavLink to="/About" className="navMenu"  activeStyle={activeStyle}>  About US</NavLink>
    <NavLink to="/Service" className="navMenu"  activeStyle={activeStyle}>  Services</NavLink>
    <NavLink to="/contact" className="navMenu"  activeStyle={activeStyle}>  Contatc Us</NavLink>
       </Nav>
                    </Col>
                    </Row>
              
    
    </Container>
  </Navbar>
     
    );
};

export default Header;