import { Col, Container, Row } from "react-bootstrap"



export const LandingHeader = () => {
    return (
        <Container className='my-5'>
        <Row className='text-start text-white'>
            <Col></Col>
            <Col className="col-8">
                <Container className='text-start'><span className='landing-header-top'>Hi there,</span></Container>
                <Container>
                    <span className='landing-header-middle'>I'm 
                        <span className='landing-header-author'> Brandon Nadeau</span>
                    </span>
                </Container>
                <Container>
                        <span className='landing-header-bottom'>Software Developer</span>
                </Container>
            </Col>
            <Col></Col>
        </Row>
    </Container>
    )
}

export const LandingHeaderMobile = () => {
    return (
        <Container className='my-5'>
        <Row className='text-start text-white'>
            <Col className="col-12">
                <Container className='text-start'><span className='landing-header-top'>Hi there, I'm</span></Container>
                <Container>
                    <span className='landing-header-middle'> 
                        <span className='landing-header-author'> Brandon Nadeau</span>
                    </span>
                </Container>
                <Container>
                        <span className='landing-header-bottom'>Software Developer</span>
                </Container>
            </Col>
        </Row>
    </Container>
    )
}

