
import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom";

import 'assets/css/skills.css'

import { PROJECTS, SKILLS } from "helpers/data";
import { ProjectSlider } from "components/sliders/ProjectSlider";
import { process_name, process_name_cmp } from "helpers/process";



export const Skill = () => {

    // Extract the skill name from the URL
    const skill_name =  useLocation().pathname.split("/")[2];

    // Find the skill in the SKILLS array
    const skill = SKILLS.filter((skill) => {
        return process_name_cmp(skill.title, skill_name);
    })[0];


    // Find the projects that use this skill
    let projects = PROJECTS.filter((project) => {
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
                    <h3 className='ms-3 mb-4'>{skill.title}</h3>
                    <Row>
                        <Col className='col-4'>
                            <img src={skill.iconUrl} alt={skill.title} width={360} height={360}/>
                        </Col>

                        <Col className="col-8 ">
                            <div className="h-75">
                                <p className="text-start">{skill.description}</p>
                            </div>
                            <Row className="my-auto align-bottom">
                                {projects.length > 0 && <Col className="my-auto "><p>Projects: {projects.length}</p></Col> }
                                <Col className="my-auto "><p>Years: { skill.years }</p></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Col>

            <ProjectSlider projects={projects}/>
        </Container>
    );
}

