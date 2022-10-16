import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap"
import { FaGithub } from "react-icons/fa"

import logo from '../../assets/images/icons/alchemy-light-blue.png'
import useIsMobile from "../../helpers/hooks/useIsMobile"


export const HomeHeader = () => {
    
    const [isMobile, isNotMobile] = useIsMobile()

    return (
        <>
        { isNotMobile && 
            <Container className='my-2'>
                <Row>
                    <Navbar expand="lg" variant='dark' >
                    <Container fluid={true} >
                        <Navbar.Brand href='#'>
                            <img id='logo' src={logo} alt='Logo' className='mx-auto' style={{ 
                                width: '50px', height: '55px'
                            }}/>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#projects" className='sticky-top border border-dark'>Projects</Nav.Link>
                            <Nav.Link href="#about" className='border border-dark'>About Me</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>

                    </Container>
                    </Navbar>
                </Row>
                <Row className='mt-3 text-center text-white header-bg border rounded border-dark'>
                    <Container className='border rounded border-dark'>
                        <Container className='my-3'>
                            <Row></Row>
                            <Row ><Col>Brandon Nadeau</Col></Row>
                            <Row><Col>email@bnadeau.dev</Col></Row>
                            {/* <Row><Col>704-614-6831</Col></Row>  */}
                            <Row><Col className='text-middle'>
                                <a style={{textDecoration:'none', color:'white'}} href='https://github.com/crispycret'>
                                    <FaGithub className='mx-2' style={{fontSize: '1.25em'}}/>
                                    Github
                                </a>
                            </Col></Row>
                        </Container>
                    </Container>
                </Row>
            </Container>        
        }
        
        {isMobile &&
            <Container className='my-2'>
                <Row>
                    <Navbar expand="lg" variant='dark' >
                    <Container fluid={true} >
                        <Navbar.Brand href='#'>
                            <img id='logo' src={logo} alt='Logo' className='mx-auto' style={{ 
                                width: '50px', height: '55px'
                            }}/>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#projects" className='sticky-top border border-dark'>Projects</Nav.Link>
                            <Nav.Link href="#about" className='border border-dark'>About Me</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>

                    </Container>
                    </Navbar>
                </Row>
                <Row className='mt-3 text-center text-white header-bg border rounded border-dark'>
                    <Container className='border rounded border-dark'>
                        <Container className='my-3'>
                            <Row></Row>
                            <Row ><Col>Brandon Nadeau</Col></Row>
                            <Row><Col>email@bnadeau.dev</Col></Row>
                            {/* <Row><Col>704-614-6831</Col></Row>  */}
                            <Row><Col className='text-middle'>
                                <a style={{textDecoration:'none', color:'white'}} href='https://github.com/crispycret'>
                                    <FaGithub className='mx-2' style={{fontSize: '1.25em'}}/>
                                    Github
                                </a>
                            </Col></Row>
                        </Container>
                    </Container>
                </Row>
            </Container>        
        }
        </>
        
    )
}



export default HomeHeader
