import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.scss'

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Precious Pixels</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/">Search</Nav.Link>
            <Nav.Link href="/upload">Upload</Nav.Link>
          </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/"><Button variant="outline-success">Reset</Button></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;