import { Col, Container, Navbar, Row } from "react-bootstrap"

import logo from '../../assets/images/icons/alchemy-blue.png'


export const HomeHeader = () => {
    return (
        <Container className='my-5'>
        <Row className='text-start text-white'>
            <Col>
                <Row>
                    <Col className='col-2 mx-auto'>
                        <img src={logo} alt='Logo' className='text-white mx-auto' style={{ 
                            width: '50px', height: '50px'
                        }}/>
                    </Col>
                    <Col>
                        <Row>
                            <Row><Col>Brandon Nadeau</Col></Row>
                            <Row><Col>bnadeau.dev@gmail.com</Col></Row>
                            <Row><Col>704-614-6831</Col></Row>
                            <Row><Col><a href='https://github.com/crispycret'>Github</a></Col></Row>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col></Col>
            <Col>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Row>
                        <Col>Home</Col>
                        <Col>Projects</Col>
                        <Col>About Me</Col>
                    </Row>
                </Navbar.Collapse>
            </Col>
        </Row>
    </Container>
    )
}

export const HomeHeaderMobile = () => {
    return (
        <Container className='my-5'>
        <Row className='text-start text-white'>
            <Col className="col-12">
                <Container className='text-start'><span className='landing-header-top'>Hi there, I'm</span></Container>
                <Container>
                    <span className=''> 
                        <span className=''> Brandon Nadeau</span>
                    </span>
                </Container>
                <Container>
                        <span className=''>Software Developer</span>
                </Container>
            </Col>
        </Row>
    </Container>
    )
}

