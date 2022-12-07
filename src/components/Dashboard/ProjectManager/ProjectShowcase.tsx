
import { useEffect, useState } from 'react'
import { Link, NavLink} from 'react-router-dom';
import { Badge, Card, Col, Container, Dropdown, ListGroup, ListGroupItem } from 'react-bootstrap';

import { FaRegEdit } from 'react-icons/fa'
import { AiOutlineDelete, AiFillDelete } from 'react-icons/ai'
import { BiAddToQueue } from 'react-icons/bi'
import {SlOptionsVertical} from 'react-icons/sl'
import useIsMobile from '../../../helpers/hooks/useIsMobile';




type Props = {
    className?:string,
    onClick?:any,
    children: JSX.Element,
}

const ListGroupItemDark = ({className, onClick, children}: Props) => 
    <ListGroup.Item as="li" variant="dark" onClick={onClick}
        className={`d-flex justify-content-between align-items-start me-auto ${className}`}
    >
        {children}
    </ListGroup.Item>


const ProjectInfo = ({project}: any) => 
    <div>
        <div className="fw-bold ms-2 d-flex">{project.title}</div>
        <div>
            {project.description.substring(0, 100)}..
        </div>
    </div>

const ProjectOptions = () => <div className='my-auto'><SlOptionsVertical/></div>





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
        setElements(testManager().getShowcase().map((project:any, i:number) =>
            <ListGroup horizontal key={i}>
                <ListGroupItemDark className='w-100' onClick={() => props.openEditor(project)}>
                    <ProjectInfo project={project} />
                </ListGroupItemDark>
                <ListGroupItemDark className='options'>
                    <ProjectOptions />
                </ListGroupItemDark>
            </ListGroup>
        ))
    }



    const create_mobile_elements = () => {
        setElements(testManager().getShowcase().map((project:any, i:number) => 
            <ListGroup horizontal key={i}>
                <ListGroupItemDark className='w-100' onClick={() => props.openEditor(project)}>
                    <ProjectInfo project={project} />
                </ListGroupItemDark>
                <ListGroupItemDark className='options'>
                    <ProjectOptions />
                </ListGroupItemDark>
            </ListGroup>
        ))
    }

    useEffect(() => {
        if (isNotMobile) create_elements()
        else create_mobile_elements()
    }, [])

    return (
        <Container className='my-2 pb-2 project-showcase'>
            <ListGroup>
                {elements}
            </ListGroup>
        </Container>
    )
}




export default ProjectShowcase;