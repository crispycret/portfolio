import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// import PROFILE_IMG from "assets/images/profile.png";
import PROFILE_IMG from "assets/images/profile.jpg";
import AUTHOR from "assets/data/author.json";

import { SkillSlider } from "components/sliders/SkillSlider";
import { ProjectSlider } from "components/sliders/ProjectSlider";

export const Home = () => {

  return (
    <Container>

        {/* Header */}
        <Row className="justify-content-md-center">
            <Col md="2">
                <Image src={ PROFILE_IMG } roundedCircle fluid className="shadow-4-strong"/>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md="auto" className="mt-4">
                <h1 className='text-center'>{ AUTHOR.name }</h1>
                <h4>{ AUTHOR.job_title }</h4>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md="auto" className="mt-1">
                <a href={AUTHOR.linkedin_url}><h5>Linkedin</h5></a>
            </Col>
            <Col md="auto" className="mt-1">
            <a href={AUTHOR.github_url}><h5>Githhub</h5></a>
            </Col>
            </Row>
        <Row className="justify-content-md-center">
            <Col md="auto" className="mt-1">
                <h5>{AUTHOR.email}</h5>
            </Col>
        </Row>

        {/* Body */}
        <Row className="justify-content-md-center mt-4">
            <Col md="8">
                {AUTHOR.summary_paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </Col>
        </Row>

        {/* Skills */}  
        <Row><SkillSlider showNumSkills={12}/></Row>
        
        {/* Projects */}
        <Row><ProjectSlider /></Row>
    </Container>
  );
}

