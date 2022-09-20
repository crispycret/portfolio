import { Button, Col, Container, Row } from "react-bootstrap";

import '../assets/css/navbar.css';

export const Navbar = () => {
    return (
        <Container className="m-0 p-0 align-items-center" style={{
            backgroundColor:"#171616", 
            width:"100%", minWidth:"100%", maxWidth: "100%",
            textAlign: "center",
            color: 'white',
            }}>

            <Row className='col-12 my-0 py-2'  style={{
                width:"100%", minWidth:"100%", maxWidth: "100%", 
            }}>
                <Col id='developer' className='col-2 pt-1'>
                    Brandon Nadeau
                </Col>
                <Col className='col-8 d-flex flex-row-reverse'>
                    <Row className='col-8'>

                        <Col className='pt-1'/>

                        <Col className='pt-1'/>
                        <Col className='navbar-option pt-1 vborder'>Portfolio</Col>
                        <Col className="navbar-option pt-1 vborder">About</Col>
                        <Col className='navbar-option pt-1 vborder'>Pages</Col>
                        <Col className='navbar-option pt-1 vborder'>Blog</Col>
                        <Col className='pt-1'/>
                        <Col className='pt-1'/>

                    </Row>
                </Col>
                <Col className=''>
                    <Button>Lets Talk</Button>
                </Col>
            </Row>

        {/*             
            <Container className="flex-row-reverse">
                <div className="p-2">Flex item 2</div>
                <div className="p-2">Flex item 1</div>
                <div className="p-2">Flex item 3</div>
            </Container>
            <Container className="flex-row">
                <div className="p-2">Flex item 1</div>
                <div className="p-2">Flex item 2</div>
                <div className="p-2">Flex item 3</div>
            </Container> 
        */}

        </Container>
    )
}


export default Navbar;