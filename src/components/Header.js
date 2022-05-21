import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>E-Shop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <LinkContainer to="/">
                            <Nav.Link> Home </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products">
                            <Nav.Link> Products </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link> Cart </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;