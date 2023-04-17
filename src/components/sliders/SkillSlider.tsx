import React, { useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import 'assets/css/skills.css'

import {SKILLS} from 'helpers/data';
import { process_name } from "helpers/process";

export type SkillSlider = {
    showNumSkills?: number;
    skills?: any;
}

export const SkillSlider = ({showNumSkills=4, skills}: SkillSlider) => {

  let titleRef = useRef<HTMLHeadingElement | null>(null);

  skills = skills ? skills : SKILLS;

  const [startIndex, setStartIndex] = useState(0);


  const handlePrevClick = () => {
    setStartIndex((prevIndex) => prevIndex - showNumSkills);
    // titleRef.current?.focus()

  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + showNumSkills);
    // titleRef.current?.focus()NewSlide

  };

  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <h2 ref={titleRef}>Skills</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        {skills.slice(startIndex, startIndex + showNumSkills).map((skill: any) => (
            <Col key={skill.title} md={3} className='mt-3'>
                <a href={"/skills/" + process_name(skill.title)} className="skill-card-column-link">
                    <div className="skill-card-column">
                        <p>{skill.title}</p>
                    </div>
                </a>
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
            disabled={startIndex + showNumSkills >= skills.length}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
}


