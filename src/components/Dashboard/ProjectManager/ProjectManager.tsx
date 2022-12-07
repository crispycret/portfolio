import { useEffect, useState } from 'react'
import { Badge, Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';

import { FaRegEdit } from 'react-icons/fa'
import { AiOutlineDelete, AiFillDelete } from 'react-icons/ai'
import { BiAddToQueue } from 'react-icons/bi'

import ProjectToolbar from './ProjectToolbar';
import ProjectShowcase from './ProjectShowcase';
import { ProjectEditor } from './ProjectEditor';
import { SlOptionsVertical } from 'react-icons/sl';
// import Project from './Project';

const cdbreact = require('cdbreact'); 
const {
  CDBContainer,
  CDBSidebarHeader,
} = cdbreact;


// Project Modal Popup when clicked (Edit / Delete)
// New Project Toolbar
// Adjust Project Order by Drag and Drop (project 1 is at the top.)
// Home screens projects should be retrieved from the backend's database in the order specified in the dashboard.
// Can have as many projects as you want.
// Make option to show projects or hide projects from home screen 
export const ProjectManager = (props: any) => {

    const [editorProject, setEditorProject] = useState(null)
    const [showEditor, setShowEditor] = useState(false)
    const openEditor = (project: any) => {
        setShowEditor(true)
        setEditorProject(project)
    }

    const manager = props.apis.portfolio.projectManager

    const [elements, setElements] = useState<any>(null)
    
    const testElements = [
        {
            title:"Project 1", 
            description: "Description of project"
        }
    ]

    const create_elements = () => {
        // if (!manager.projects) { return }
        
        // setElements(manager.projects.map((project: any, i: number) => {
        setElements(testElements.map((project: any, i: number) => 
            <div key={i}>
                <ListGroup.Item as="li" variant="dark" className="d-flex justify-content-between align-items-start">
                {/* <ListGroup.Item as="li" backgroundColor={'#333'} className="d-flex justify-content-between align-items-start"> */}
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        <div>Cras justo odio</div>
                    </div>
                    <div className='my-auto'>
                        <SlOptionsVertical/>
                        {/* <Badge bg="primary" pill>14</Badge> */}
                    </div>
                </ListGroup.Item>
            </div>
        ))
    }

    useEffect(() => {
        create_elements()
    }, [])

    return(
        <>
            <ProjectEditor show={showEditor} setShow={setShowEditor} project={editorProject}/>

            <ListGroup className='my-5'>
                <ListGroup.Item variant='dark' className='list-group-container'>
                    <ProjectToolbar openEditor={openEditor}/>
                </ListGroup.Item>

                <ListGroup.Item variant='dark' className='list-group-container'>
                    <ProjectShowcase openEditor={openEditor}/>
                </ListGroup.Item>

                {/* Exclude Projects display in the ProjectShowcase */}

                <ListGroup.Item variant='dark' className='list-group-container'>
                    <Container className='my-2'>
                        {/* <Card.Title className='text-black my-1'>Projects</Card.Title> */}
                        <ListGroup as="ol" numbered>
                            { elements }
                        </ListGroup>
                    </Container>
                </ListGroup.Item>

            </ListGroup>
        </>
    )

}




export default ProjectManager;