import { useEffect, useState } from "react";

import { Card, CardGroup, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

import '../assets/css/home.css';

import LanguageSection from "../components/Home/Landing/LanguageSection";
import FrameworkSection from "../components/Home/Landing/FrameworkSection";
import { LandingSection } from "../components/Home/Landing/LandingSection";
import { ProjectSection } from "../components/Home/Project/ProjectSection";



export const Home = () => {

    return (
        <Container id='home'>
            <LandingSection />
            <ProjectSection />
        </Container>
    )

}


export default Home;