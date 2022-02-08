import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

const NavBar = ({heading,signinbtn}) => {
  return (
    <>
      <Navbar expand="lg" className='navBar'>
  <Container >
    <Navbar.Brand href="#home">{heading}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home" className="nav-item">Review</Nav.Link>
        <Nav.Link href="#link" className="nav-item">Tips</Nav.Link>
        <Nav.Link href="#link" className="nav-item">Alert</Nav.Link>
        <Nav.Link href="#link" className="nav-item">Blog</Nav.Link>
        <Button className="btn-style">{signinbtn}</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      
    </>
  );
};

export default NavBar;
