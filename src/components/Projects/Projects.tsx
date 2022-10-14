import { Col, Container, Row } from "react-bootstrap"
import Project from "./Project"

import imageUrlGithubAPI from '../../assets/images/projects/github-api/sample.png'
import useIsMobile from "../../helpers/hooks/useIsMobile";

export const Projects = () => {

    const [isMobile, isNotMobile] = useIsMobile();

    const projects = [
        {
            name: "github-api",
            summary: "A read only flask api for a single user. The API acts as a buffer between the true Github API and allows faster data retriveals by storing the users github data in a seperate database.",
            completed: false,
            imageUrl: imageUrlGithubAPI,
            githubUrl: 'https://github.com/crispycret/github-api',
            websiteUrl: 'https://github.com/crispycret/github-api',
        },
        {
            name: "Fractal Engine Web",
            summary: "A read only flask api for a single user. The API acts as a buffer between the true Github API and allows faster data retriveals by storing the users github data in a seperate database.",
            completed: false,
            imageUrl: imageUrlGithubAPI,
            githubUrl: 'https://github.com/crispycret/github-api',
            websiteUrl: 'https://github.com/crispycret/github-api',
        },
        {
            name: "Fractal Engine Android",
            summary: "A read only flask api for a single user. The API acts as a buffer between the true Github API and allows faster data retriveals by storing the users github data in a seperate database.",
            completed: false,
            imageUrl: imageUrlGithubAPI,
            githubUrl: 'https://github.com/crispycret/github-api',
            websiteUrl: 'https://github.com/crispycret/github-api',
        },
    ]


    return (

        <>
            { isMobile &&
                <>
                    <Container className='my-5'>
                        <Row><Col><Project {...projects[0]}/></Col></Row>
                        <Row><Col><Project {...projects[1]}/></Col></Row>
                        <Row><Col><Project {...projects[2]}/></Col></Row>
                        <Row><Col><Project {...projects[0]}/></Col></Row>
                        <Row><Col><Project {...projects[0]}/></Col></Row>
                        <Row><Col><Project {...projects[0]}/></Col></Row>
                    </Container>
                </>
            }

            { isNotMobile &&
                <>
                    <Container className='my-5'>
                        <Row>
                            <Col><Project {...projects[0]}/></Col>
                            <Col><Project {...projects[1]}/></Col>
                            <Col><Project {...projects[2]}/></Col>
                        </Row>
                        <Row>
                            <Col><Project {...projects[0]}/></Col>
                            <Col><Project {...projects[0]}/></Col>
                            <Col><Project {...projects[0]}/></Col>
                        </Row>
                    </Container>
                </>
            }
        </>

    )
}


export default Projects;