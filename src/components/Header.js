import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href={window.location.pathname}>y640</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#Profle">Profile</Nav.Link>
                        <Nav.Link href="#MyApps">MyApps</Nav.Link>
                        <Nav.Link href="#Qualifications">Qualifications</Nav.Link>
                        <Nav.Link href="#Videos">Videos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
