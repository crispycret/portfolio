import { useEffect, useState } from "react";

import { Card, CardGroup, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { AboutMobile } from "../components/About/About";

import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";

export const HomePage = () => {

    return (
        <Container id='home-page'>
            <Home />
            <Projects />
            <AboutMobile />
            <div className='my-5'></div>
        </Container>
    )

}


export default HomePage;