import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from '../cartWidget/cartwidget';
import Logo from '../../logo/logo';

function NavBar() {
    return (
    <>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
                <Nav className="plantCategories">
                    <Nav.Link href="#popular">Popular Picks</Nav.Link>
                    <Nav.Link href="#indoor">Indoor Delights</Nav.Link>
                    <Nav.Link href="#budget">Budget-Friendly Beauties</Nav.Link>
                    <Nav.Link href="#pricing"><Cartwidget /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>)}
    export default NavBar;