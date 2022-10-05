import { useEffect, useState } from "react";

import { Card, CardGroup, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

import '../../assets/css/home.css';

import FrameworkSection from "./FrameworkSection";
import LanguageSection from "./LanguageSection";

import {update, get_repos_with_latest_commit} from '../../helpers/api/github'


export const HomeSection = () => {

    const [repos, setRepos] = useState({}) 

    /**
     * Make a request to the database to get the latest worked on repos.
     * Store this state to use in JSX
     */
    const update_github_section = () => {
        get_repos_with_latest_commit(1).then(function(response) {
            // console.log(response.status)
            // console.log(response.data[0].commits)
            setRepos(response.data)
        })
    }
    // Update the github API database every hour.


    useEffect(() => {
        update_github_section()
    }, [])

    return (
        <Container style={{
            width: '100vw', minWidth: '100vw', height: '80vh', 
            }}>
            
            <Row >
                <Col /> {/* Spacing Column */}

                <Col className='col-8'>
                    <Card className='bg-dark text-white square border border-success mt-5'>
                        <Card.Header style={{fontSize: 24}} className='my-5'>Developer Portfolio by Brandon Nadeau</Card.Header>
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

            <Row>
                {/* GITHUB SLIDER SECTION */}
                <Col className='col-12'>
                    GITHUB EXTENSION
                </Col>
            </Row>


        </Container>
    )

}


export default HomeSection;