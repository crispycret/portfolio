import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap"
import Project from "./Project"

import useIsMobile from "../../helpers/hooks/useIsMobile";
import GradientText from "../../helpers/utils/GradientText";

import imageUrlGithubAPI from '../../assets/images/projects/github-api/sample.png'

export const Projects = (props: any) => {

    const {isMobile, isNotMobile} = useIsMobile();

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
            props.apis.github.get_repo_by_name(repo_name)
        }
    }

    useEffect(() => {
        get_updated_time_for_projects()
    }, [])


    return (
        <>
            <Container id='projects' className='mt-3'>

                <Container className='text-white' style={{fontSize:'20px'}}>
                    {isMobile && <GradientText text='Projects' fontSize={18} x={37.5} y={65} height={2}/>}
                    {isNotMobile && <GradientText text='Projects' fontSize={28} x={45} y={80} height={3}/>}                    
                </Container>

                {isMobile &&
                <>
                    <Row>
                        <Col><Project {...props} {...projects[0]}/></Col>
                    </Row>
                    <Row>
                        <Col><Project {...props} {...projects[1]}/></Col>
                    </Row>
                    <Row>
                        <Col><Project {...props} {...projects[2]}/></Col>
                    </Row>
                    <Row>
                        <Col><Project {...props} {...projects[3]}/></Col>
                    </Row>
                    <Row>
                        <Col><Project {...props} {...projects[4]}/></Col>
                    </Row>
                    <Row>
                        <Col><Project {...props} {...projects[0]}/></Col>
                    </Row>
                </> 
                }

                {isNotMobile &&
                <>
                    <Row>
                        <Col><Project {...props} {...projects[0]}/></Col>
                        <Col><Project {...props} {...projects[1]}/></Col>
                        <Col><Project {...props} {...projects[2]}/></Col>
                    </Row>
                    <Row>
                        <Col><Project {...props} {...projects[3]}/></Col>
                        <Col><Project {...props} {...projects[4]}/></Col>
                        <Col><Project {...props} {...projects[0]}/></Col>
                    </Row>
                </> 
                }

            </Container>
        </>
    )
}


export default Projects;