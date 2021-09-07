import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image';


export default function Header(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                { props.dropdown?
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> : ""
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

// for default values
Header.defaultProps = {
    title: "default todo",
    searchBar: true,
}

// use for strict type checking 
Header.propTypes = {
    title: PropTypes.string,
    dropdown: PropTypes.bool.isRequired
}