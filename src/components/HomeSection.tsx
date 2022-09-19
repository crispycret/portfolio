import { Col, Container, Row } from "react-bootstrap";

import '../assets/css/home.css';


export const HomeSection = () => {

    return (
        <Container className='' style={{width: '100vw', minWidth: '100vw', height: '80vh', backgroundColor:'rgb(36, 36, 36)'}}>
            
            <Row>
                <Col>
                </Col>

                <Col>
                    <Container id="home-languages" className='m-2 p-2 py-4 col-4 languages' style={{
                            backgroundColor:'rgb(32, 32, 32)',
                            color:'white',
                            alignItems: 'right',
                            border: '0.25em solid',
                            borderColor: 'rgb(15, 15, 21)',
                            borderRadius: '5%',
                            float: 'right',
                    }}>
                        
                        <Row><Col>Lanugages</Col></Row>
                        
                        <Row>
                            <Col className='col-12'>
                                <Row className=''>
                                    <Col className='col-6'>Python</Col>
                                    <Col className='col-6'>Advanced</Col>
                                </Row>
                                <Row><Col>Java</Col><Col>Beginner</Col></Row>
                                <Row><Col>Javascript</Col><Col>Beginner</Col></Row>
                                <Row><Col>Typescript</Col><Col>Beginner</Col></Row>
                                <Row><Col>Kotlin</Col><Col>Beginner</Col></Row>
                            </Col>
                        </Row>    

                    </Container>
                </Col>
            </Row>


        </Container>
    )

}


export default HomeSection;