import { Col, Container, Row } from "react-bootstrap"


export const LanguageSection = () => {
    return (
        <Container id="home-languages" className='m-2 p-2 pt-0 col-4 languages' style={{
            height: '70vh',
            color:'white',
            backgroundColor:'rgb(32, 32, 32)',
            alignItems: 'right',
            border: '0.25em solid',
            borderColor: 'rgb(15, 15, 21)',
            borderRadius: '5%',
            float: 'right',
    }}>
        
        <Row className='pt-2 pb-3 m-1 align-items-center' style={{
            backgroundColor:'#171616',
            border: '0.25em solid',
            borderColor: 'rgb(15, 15, 21)',
            borderRadius: '12% 12% 12% 12%',
        }}><Col>Languages</Col></Row>
        
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
    )
}



export default LanguageSection;

