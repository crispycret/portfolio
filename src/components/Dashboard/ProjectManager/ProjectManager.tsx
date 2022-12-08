import { useEffect, useState } from 'react'
import { Badge, Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';
import { SlOptionsVertical } from 'react-icons/sl';

import ProjectToolbar from './ProjectToolbar';
import ProjectShowcase from './ProjectShowcase';
import { DeleteProject, ProjectEditor } from './ProjectEditor';

import ProjectEntry, { 
    ListGroupItemDark, 
    ProjectDragAndDrop, 
    ProjectInfo, 
    ProjectOptions 
} from './ProjectEntry';

import useIsMobile from '../../../helpers/hooks/useIsMobile';

// import Project from './Project';

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
        setEditorProject(project)
        setShowEditor(true)
    }

    const [selectedProject, setSelectedProject] = useState(null)
    const [showDelete, setShowDelete] = useState(false)
    const openDelete = (project: any) => {
        setSelectedProject(project)
        setShowDelete(true)
    }

    const manager = props.apis.portfolio.projectManager

    const [elements, setElements] = useState<any>(null)
    
    const testElements = [
        {
            title: "Github API Buffer",
            description: "A read only flask api for a single user. The API acts as a buffer between the true Github API and allows faster data retriveals by storing the users github data in a seperate database.",
            status: 'completed',
            githubUrl: 'https://github.com/crispycret/github-api',
            websiteUrl: 'https://github.com/crispycret/github-api',
            previewUrl: '',
        },
    ]

    const create_elements = () => {
        // if (!manager.projects) { return }
        
        // setElements(manager.projects.map((project: any, i: number) => {
        setElements(testElements.map((project: any, key: number) => {
            let props={project, key, openEditor, openDelete} 
            return (
                <ProjectEntry {...props}/>
            )
        }
        ))
    }

    const [isMobile, isNotMobile] = useIsMobile()
    
    const ifMobileDefault = () => {return isMobile ? 'mobile' : ''}
    const ifMobile = (cls:string) => {return isMobile ? cls : ''}

    useEffect(() => {
        create_elements()
    }, [])

    return(
        <>
            <ProjectEditor show={showEditor} setShow={setShowEditor} project={editorProject}/>
            <DeleteProject show={showDelete} setShow={setShowDelete} project={selectedProject}/>

            <ListGroup className={`my-5 ${ifMobile('px-0')}`}>
                <ListGroup.Item variant='dark' className='list-group-container'>
                    <ProjectToolbar openEditor={openEditor}/>
                </ListGroup.Item>

                <ListGroup.Item variant='dark' className={`list-group-container ${ifMobile('px-0')}`}>
                    <ProjectShowcase openEditor={openEditor} openDelete={openDelete}/>
                </ListGroup.Item>


                {/* Exclude Projects display in the ProjectShowcase? */}
                <ListGroup.Item variant='dark' className={`list-group-container ${ifMobile('px-0')}`}>
                    <Container className='my-2' />
                    <ListGroup as="ol" numbered>
                        { elements }
                    </ListGroup>
                </ListGroup.Item>

            </ListGroup>
        </>
    )

}




export default ProjectManager;