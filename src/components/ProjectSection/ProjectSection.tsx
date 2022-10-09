import { Col, Container, Row } from "react-bootstrap"
import Project from "./Project"

import imageUrlGithubAPI from '../../assets/images/projects/github-api/sample.png'

export const ProjectSection = () => {

    const projects = [
        {
            name: "github-api",
            summary: "A read only flask api for a single user. The API acts as a buffer between the true Github API and allows faster data retriveals by storing the users github data in a seperate database.",
            completed: false,
            imageUrl: imageUrlGithubAPI,
            githubUrl: 'https://github.com/crispycret/github-api',
            websiteUrl: 'https://github.com/crispycret/github-api',
        },
    ]


    return (
        <Container className='bg-dark my-5'>
            <Row>
                <Col><Project {...projects[0]}/></Col>
                <Col><Project {...projects[0]}/></Col>
                <Col><Project {...projects[0]}/></Col>
            </Row>
            <Row>
                <Col><Project {...projects[0]}/></Col>
                <Col><Project {...projects[0]}/></Col>
                <Col><Project {...projects[0]}/></Col>
            </Row>
        </Container>
    )
}