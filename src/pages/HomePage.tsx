import { useEffect, useState } from "react";

import { Card, CardGroup, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";

export const HomePage = () => {

    return (
        <Container id='home-page'>
            <Home />
            <Projects />
        </Container>
    )

}


export default HomePage;