
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
        
 <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Row>
                    <Col lg="4" >
                          <NavLink to="/Home" className='navbar-brand ' activeStyle={activeStyle}>
                    <Image src="logo.png"className='logo' rounded /> </NavLink>
                    </Col>

                    <Col lg="8">
                          
    <Nav className="justify-content-between">
    <NavLink to="/Home"  className="navMenu"  activeStyle={activeStyle}>  Home</NavLink>
    <NavLink to="/About" className="navMenu"  activeStyle={activeStyle}>  About</NavLink>
    <NavLink to="/Service" className="navMenu"  activeStyle={activeStyle}>  Services</NavLink>
       </Nav>
                    </Col>
                    </Row>
              
    
    </Container>
  </Navbar>
     
    );
};

export default Header;