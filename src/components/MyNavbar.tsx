import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

import '../assets/css/navbar.css';

export const MyNavbar = () => {
    return (
        <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Brandon Nadeau</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        // <Container className="m-0 p-0 align-items-center" style={{
        //     backgroundColor:"#171616", 
        //     width:"100%", minWidth:"100%", maxWidth: "100%",
        //     textAlign: "center",
        //     color: 'white',
        //     }}>

        //     <Row className='col-12 my-0 py-2'  style={{
        //         width:"100%", minWidth:"100%", maxWidth: "100%", 
        //     }}>
        //         <Col id='developer' className='col-2 pt-1'>
        //             Brandon Nadeau
        //         </Col>
        //         <Col className='col-8 d-flex flex-row-reverse'>
        //             <Row className='col-8'>

        //                 <Col className='pt-1'/>

        //                 <Col className='pt-1'/>
        //                 <Col className='navbar-option pt-1 vborder'>Portfolio</Col>
        //                 <Col className="navbar-option pt-1 vborder">About</Col>
        //                 <Col className='navbar-option pt-1 vborder'>Pages</Col>
        //                 <Col className='navbar-option pt-1 vborder'>Blog</Col>
        //                 <Col className='pt-1'/>
        //                 <Col className='pt-1'/>

        //             </Row>
        //         </Col>
        //         <Col className=''>
        //             <Button>Lets Talk</Button>
        //         </Col>
        //     </Row>

        // {/*             
        //     <Container className="flex-row-reverse">
        //         <div className="p-2">Flex item 2</div>
        //         <div className="p-2">Flex item 1</div>
        //         <div className="p-2">Flex item 3</div>
        //     </Container>
        //     <Container className="flex-row">
        //         <div className="p-2">Flex item 1</div>
        //         <div className="p-2">Flex item 2</div>
        //         <div className="p-2">Flex item 3</div>
        //     </Container> 
        // */}

        // </Container>
    )
}


export default MyNavbar;