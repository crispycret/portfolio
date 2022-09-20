import { Card, CardGroup, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

import '../../assets/css/home.css';
import FrameworkSection from "./FrameworkSection";
import LanguageSection from "./LanguageSection";


export const HomeSection = () => {

    return (
        <Container style={{
            width: '100vw', minWidth: '100vw', height: '80vh', 
            }}>
            
            <Row >
                
                <Col /> {/* Spacing Column */}
                
                <Col className='col-8'>
                    <Card className='bg-dark text-white square border border-success mt-5'>
                        <Card.Header style={{fontSize: 24}}>Developer Portfolio by Brandon Nadeau</Card.Header>
                        <Card className='bg-dark text-white square border border-success py-5'>
                            <Card.Body style={{fontSize: 18}} className='py-5'>
                                    <Row className='py-5'>
                                        <Col className='py-5'>Over 10+ years as Hobbyist!</Col>
                                    </Row>
                            </Card.Body>
                        </Card>
                    </Card>
                    
                </Col>

                <Col /> {/* Spacing Column */}

                <Col className='col-2'>
                    <Row>
                        <LanguageSection />
                    </Row>
                    <Row>
                        <FrameworkSection />
                    </Row>
                </Col>

                <Col /> {/* Spacing Column */}
            </Row>


        </Container>
    )

}


export default HomeSection;