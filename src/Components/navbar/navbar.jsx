import React from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from '../cartWidget/cartWidget';
import Logo from '../../logo/logo';
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
    <>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand as={NavLink} to="/"><Logo/></Navbar.Brand>
                <Nav className="plantCategories">
                    <Nav.Link as={NavLink} to="/category/popular">Popular Picks</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/indoor">Indoor Delights</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/budget">Budget-Friendly Beauties</Nav.Link>
                    <Nav.Link as={NavLink} to="/cart"><Cartwidget /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>)}
    export default NavBar;