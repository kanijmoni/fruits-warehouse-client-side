import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Fresh Fruit</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features"></Nav.Link>
                            <Nav.Link href="#pricing"></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </header>
    );
};

export default Header;