
import { useEffect, useState } from 'react'
import { Link, NavLink} from 'react-router-dom';

import { Container, ListGroup } from 'react-bootstrap';
import ProjectEntry, { 
    ListGroupItemDark, 
    ProjectDragAndDrop, 
    ProjectInfo, 
    ProjectOptions 
} from './ProjectEntry';

import useIsMobile from '../../../helpers/hooks/useIsMobile';



export const ProjectShowcase = (props: any) => {

    // const manager = props.projectManager;

    const [isMobile, isNotMobile] = useIsMobile()

    const [elements, setElements] = useState<any>(null)

    const testManager = () => {
        const getShowcase = () => {
            return [
                {
                    title: "Github API Buffer",
                    description: "A read only flask api for a single user. The API acts as a buffer between the true Github API and allows faster data retriveals by storing the users github data in a seperate database.",
                    status: 'completed',
                    githubUrl: 'https://github.com/crispycret/github-api',
                    websiteUrl: 'https://github.com/crispycret/github-api',
                    previewUrl: '',
                },
                {
                    title: "Github API Buffer",
                    description: "A read only flask api for a single user. The API acts as a buffer between the true Github API and allows faster data retriveals by storing the users github data in a seperate database.",
                    status: 'completed',
                    githubUrl: 'https://github.com/crispycret/github-api',
                    websiteUrl: 'https://github.com/crispycret/github-api',
                    previewUrl: '',
                },
            ]
        }

        return {
            getShowcase
        }
    }


    const create_elements = () => {
        setElements(testManager().getShowcase().map((project:any, key:number) => {
            let _props = { project, key } 
            return (
                <ProjectEntry {..._props} openEditor={props.openEditor} openDelete={props.openDelete} />
            )
        }))
    }


    const create_mobile_elements = () => {
        setElements(testManager().getShowcase().map((project:any, key:number) => {
            let _props = { project, key } 
            return (
                <ProjectEntry {..._props} 
                    openEditor={props.openEditor} 
                    openDelete={props.openDelete}
                    descriptionLimit={80} 
                />
            )
        }))
    }

    useEffect(() => {
        if (isNotMobile) create_elements()
        else create_mobile_elements()
    }, [])

    return (
        <>
            {/* <Container className={`my-2 pb-2 project-showcase ${isMobile ? 'px-0' : ''}`} /> */}
            <ListGroup>
                {elements}
            </ListGroup>
            <Container className={`my-2 pb-2 project-showcase ${isMobile ? 'px-0' : ''}`} />
        </>
    )
}




export default ProjectShowcase;