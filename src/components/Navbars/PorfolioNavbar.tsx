import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export const PortfolioNavbar = () => {
    
      return (
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Brandon Nadeau</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="ms-auto">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link href="#portfolio" >Portfolio</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#pages">Pages</Nav.Link>
                <Nav.Link href="#pages">Blog</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
            </Nav>
          </Container>
        </Navbar>
      );
    
}


export default PortfolioNavbar;