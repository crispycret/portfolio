import { useEffect, useState } from "react";

import { Card, CardGroup, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";

export const HomePage = () => {

    return (
        <Container id='home-page'>
            <Home />
            <Projects />
            <About />
            <div className='my-5'></div>
        </Container>
    )

}


export default HomePage;