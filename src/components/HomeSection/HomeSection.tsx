import { useEffect, useState } from "react";

import { Card, CardGroup, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

import '../../assets/css/home.css';

import LanguageSection from "./LanguageSection";
import FrameworkSection from "./FrameworkSection";
import GithubExtension from "./GithubExtension";



export const HomeSection = () => {

    return (
        <Container className='bg-dark' style={{
            // width: '100vw', minWidth: '100vw', height: '80vh', 
        }}>
            
            <Row >
                <Col /> {/* Spacing Column */}

                <Col className='col-8'>
                    <Card className='bg-dark text-white square border border-success mt-5'>
                        <Card.Header style={{fontSize: 24}} className='my-5'>Brandon Nadeau</Card.Header>
                        <Card className='bg-dark text-white square border border-success py-5'>
                            <Card.Body style={{fontSize: 18}} className='py-5'>
                                    <Row className='py-5'>
                                        <Col className='py-5'>Full Stack Developer</Col>
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

            <Row>
                {/* GITHUB SLIDER SECTION */}
                <Col className='col-12'>
                    <GithubExtension />
                </Col>
            </Row>

            <Row className='mb-5 mx-5'></Row>


        </Container>
    )

}


export default HomeSection;