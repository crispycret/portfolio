import React, { useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import 'assets/css/projects.css'

import { PROJECTS } from 'helpers/data';

export type ProjectSlider = {
  showNumProjects?: number;
  projects?: any;
};


export const ProjectSlider = ({showNumProjects=4, projects}: any) => {

  let titleRef = useRef<HTMLHeadingElement | null>(null);

  const [startIndex, setStartIndex] = useState(0);

  const projectsList = projects ? projects : PROJECTS;

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => prevIndex - showNumProjects);
    titleRef.current?.focus()
    
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + showNumProjects);
    titleRef.current?.focus()
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <h2 ref={titleRef}>Projects</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        {projectsList.slice(startIndex, startIndex + showNumProjects).map((project: any) => (
          <Col key={project.title} md={6} className="mb-3">
                <div className="project-card text-start ">
                  <a className='project-card-link h-80' href={project.link}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </a>

                  <h5 className='mt-3 text-center'>Tech Stack</h5>
                  <Row>
                    {project.stack.map((tech: any) => (
                      <Col key={tech} md={3} className="mx-auto my-auto text-center">
                          <a href={"/skills/" + tech.toLowerCase()} className="project-card-link">
                            <div className="project-card-column mb-3">
                              <p className="my-auto">{tech}</p>
                            </div>
                          </a>
                      </Col>
                    ))}
                  </Row>
                </div>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <Button
            variant="primary"
            onClick={handlePrevClick}
            disabled={startIndex === 0}
          >
            Prev
          </Button>{" "}
          <Button
            variant="primary"
            onClick={handleNextClick}
            disabled={startIndex + showNumProjects >= projectsList.length}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

