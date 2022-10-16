import { Card, Col, Container, Row } from "react-bootstrap"
import Project from "./Project"

import imageUrlGithubAPI from '../../assets/images/projects/github-api/sample.png'
import useIsMobile from "../../helpers/hooks/useIsMobile";
import GradientText from "../../helpers/utils/GradientText";
import { useEffect } from "react";
import github, { Github } from "../../helpers/api/github";

export const Projects = () => {

    const [isMobile, isNotMobile] = useIsMobile();

    const projects = [
        {
            name: "Github API Buffer",
            summary: "A read only flask api for a single user. The API acts as a buffer between the true Github API and allows faster data retriveals by storing the users github data in a seperate database.",
            completed: true,
            imageUrl: imageUrlGithubAPI,
            githubUrl: 'https://github.com/crispycret/github-api',
            websiteUrl: 'https://github.com/crispycret/github-api',
        },
        {
            name: "Fractal Engine Web App",
            summary: "A read only flask api for a single user. The API acts as a buffer between the true Github API and allows faster data retriveals by storing the users github data in a seperate database.",
            completed: false,
            imageUrl: imageUrlGithubAPI,
            githubUrl: 'https://github.com/crispycret/FractalEngineWebApp',
            websiteUrl: 'https://github.com/crispycret/FractalEngineWebApp',
        },
        {
            name: "Fractal Engine Android App",
            summary: "A read only flask api for a single user. The API acts as a buffer between the true Github API and allows faster data retriveals by storing the users github data in a seperate database.",
            completed: false,
            imageUrl: imageUrlGithubAPI,
            githubUrl: 'https://github.com/crispycret/AndroidFractalEngine',
            websiteUrl: 'https://github.com/crispycret/AndroidFractalEngine',
        },
        {
            name: "Blog",
            summary: "A read only flask api for a single user. The API acts as a buffer between the true Github API and allows faster data retriveals by storing the users github data in a seperate database.",
            completed: false,
            imageUrl: imageUrlGithubAPI,
            githubUrl: 'https://github.com/crispycret/github-api',
            websiteUrl: 'https://github.com/crispycret/github-api',
        },
        {
            name: "Flask - User Auth Sample",
            summary: "A read only flask api for a single user. The API acts as a buffer between the true Github API and allows faster data retriveals by storing the users github data in a seperate database.",
            completed: true,
            imageUrl: imageUrlGithubAPI,
            githubUrl: 'https://github.com/crispycret/flask-user-auth',
            websiteUrl: 'https://github.com/crispycret/flask-user-auth',
        },
        
    ]


    const get_updated_time_for_projects = () => {
        for (const project of projects) {
            let split = project.githubUrl.split('/')
            let repo_name = split[split.length-1]
            github.get_repo_by_name(repo_name)
        }
    }

    useEffect(() => {
        get_updated_time_for_projects()
    }, [])


    return (

        <>
            { isMobile &&
                <>
                    <Container id='projects' className='mt-3'>
                        <Container className='text-white' style={{fontSize:'20px'}}>
                            <GradientText text='Projects' fontSize={18} />
                                {/* Projects */}
                            </Container>

                        <Row><Col><Project {...projects[0]}/></Col></Row>
                        <Row><Col><Project {...projects[1]}/></Col></Row>
                        <Row><Col><Project {...projects[2]}/></Col></Row>
                        <Row><Col><Project {...projects[4]}/></Col></Row>
                    </Container>
                </>
            }

            { isNotMobile &&
                
                <>
                    <Container id='projects' className='mt-3'>
                        <Row>
                            <Col><Project {...projects[0]}/></Col>
                            <Col><Project {...projects[1]}/></Col>
                            <Col><Project {...projects[2]}/></Col>
                        </Row>
                        <Row>
                            <Col><Project {...projects[3]}/></Col>
                            <Col><Project {...projects[4]}/></Col>
                            <Col><Project {...projects[0]}/></Col>
                        </Row>
                    </Container>
                </>
            }
        </>

    )
}


export default Projects;