import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/cjs/NavDropdown";
import '../styles/transparent-navbar.css';

function TransparentNavBar() {
    return (
        <Navbar bg="light" expand="lg" className='transparentNav' variant='dark'>
            <Navbar.Brand href="#home">Zootopia</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Giới thiệu</Nav.Link>
                    <NavDropdown title="Hướng dẫn" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Danh mục loài</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TransparentNavBar;