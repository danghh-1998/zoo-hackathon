import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/cjs/NavDropdown";
import {Link} from 'react-router-dom'
import '../styles/transparent-navbar.css';
import logo from '../resources/logo.png'

function TransparentNavBar() {
    return (
        <Navbar bg="light" expand="lg" className='transparentNav' variant='dark'>
            <Navbar.Brand href="#home">
                <img src={logo} alt="" style={{height: '56px'}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className='text-light'>Giới thiệu</Nav.Link>
                    <NavDropdown title="Hướng dẫn" id="basic-nav-dropdown" className="text-light">
                        <NavDropdown.Item href="#">
                            <Link to="/huong-dan" style={{color: 'black', textDecoration: 'none'}}>Vi phạm liên quan đến
                                quảng cáo bán ĐVHD trái phép</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            <Link to="/huong-dan" style={{color: 'black', textDecoration: 'none'}}>Vi phạm liên quan đến
                                ĐVHD sống</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            <Link to="/huong-dan" style={{color: 'black', textDecoration: 'none'}}>Vi phạm liên quan đến
                                ĐVHD chết, bộ phận và sản phẩm của chúng</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            <Link to="/huong-dan" style={{color: 'black', textDecoration: 'none'}}>Vi phạm liên quan đến
                                trình tự thủ tục</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            <Link to="/huong-dan" style={{color: 'black', textDecoration: 'none'}}>Vi phạm liên quan đến
                                môi trường sống của ĐVHD và các vi phạm khác</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">
                        <Link to="/" style={{color: 'white', textDecoration: 'none'}}>
                            Danh mục loài
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TransparentNavBar;