import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="dark" style={{color: "#c5c5c5"}} expand="lg">
      <Navbar.Brand style={{color: "#c5c5c5", fontSize: '1.5em'}} className='ms-2' href="/">Portfolio</Navbar.Brand>
      <Navbar.Toggle style={{color: "#c5c5c5"}} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{color: "#c5c5c5"}}>
          {/* <Nav.Link href="/about">About</Nav.Link> */}
          <Nav.Link style={{color: "#c5c5c5", fontSize: '1.3em'}} href="/skills">Skills</Nav.Link>
          <Nav.Link style={{color: "#c5c5c5", fontSize: '1.25em'}} href="/projects">Projects</Nav.Link>
          {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

