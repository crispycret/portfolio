
import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom";

import 'assets/css/skills.css'

import { PROJECTS, SKILLS } from "helpers/data";
import { SkillSlider } from "components/sliders/SkillSlider";
import { process_name_cmp } from "helpers/process";




export const Project = () => {

    // Extract the skill name from the URL
    const project_name =  useLocation().pathname.split("/")[2];
    
    // Find the skill in the SKILLS array
    const project = PROJECTS.filter((project) => {
        return process_name_cmp(project.title, project_name);
    })[0];

    // Find the projects that use this skill
    let skills = SKILLS.filter((skill) => {
        return project.stack.includes(skill.title);
    });


    // [!] Projects don't have a date field, so we need to add it
    // Sort the projects by date
    // useEffect(() => {
    //     projects.sort((a, b) => {
    //         return new Date(b.date).getTime() - new Date(a.date).getTime();
    //     });
    // }, []);

    // Render the skill card and the project slider
    return (
        <Container className="mt-3">
            
            <Col ml={6}>
                <div className="skill-card">
                    <h3 className='ms-3 mb-4'>{project.title}</h3>
                    <Row>
                        <Col className='col-4'>
                            <img src={project.title} alt={project.title} />
                        </Col>

                        <Col className="col-8 ">
                            <div className="h-75">
                                <p className="">{project.description}</p>
                            </div>
                            <Row className="my-auto align-bottom">
                                <Col className="my-auto "><p>Projects: 8</p></Col>
                                <Col className="my-auto "><p>Years: 3</p></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Col>

            <SkillSlider skills={skills}/>
        </Container>
    );
}

