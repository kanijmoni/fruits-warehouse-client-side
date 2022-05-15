import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <header className='sticky-top'>
            <>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/home">Fresh Fruit</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link className='text-white' as={Link} to="/inventory">Inventory</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            {
                                user && <>
                                    <Nav.Link className='text-white' as={Link} to="myItems">My Items</Nav.Link>
                                    <Nav.Link className='text-white' as={Link} to="/addItem">Add Item</Nav.Link>
                                    <Nav.Link className='text-white' as={Link} to="/manageItems">Manage Items</Nav.Link>
                                </>
                            }
                            <Nav>
                                <Nav.Link className='text-white' as={Link} to="/blogs">Blogs</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
                            </Nav>

                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={() => handleSignOut()}>Sign out</button>
                                    :
                                    <Nav.Link className='text-white' as={Link} to={'/login'}>
                                        Login
                                    </Nav.Link>
                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </header>
    );
};

export default Header;