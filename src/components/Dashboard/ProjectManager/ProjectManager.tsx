import { useEffect, useState } from 'react'
import { Badge, Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';
import { SlOptionsVertical } from 'react-icons/sl';

import ProjectToolbar from './ProjectToolbar';
import ProjectShowcase from './ProjectShowcase';
import { DeleteProject, ProjectEditor } from './ProjectEditor';
import ProjectEntry from './ProjectEntry';

import useIsMobile from '../../../helpers/hooks/useIsMobile';

// import Project from './Project';

const exampleProject = {
    title: "Project Title",
    description: "Project Description",
    status: 'completed',
    githubUrl: 'https://github.com/crispycret/',
    websiteUrl: 'https://github.com/crispycret/',
    previewUrl: '',
}

// Project Modal Popup when clicked (Edit / Delete)
// New Project Toolbar
// Adjust Project Order by Drag and Drop (project 1 is at the top.)
// Home screens projects should be retrieved from the backend's database in the order specified in the dashboard.
// Can have as many projects as you want.
// Make option to show projects or hide projects from home screen 
export const ProjectManager = (props: any) => {

    const [selectedProject, setSelectedProject] = useState(exampleProject)

    const [showEditor, setShowEditor] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [editorCreateFlag, setEditorCreateFlag] = useState(false)

    // const openEditorPopup = (76u6 project: any) => {
    const openEditor = (project: any, create=false) => {
        if (!project) project = exampleProject
        setSelectedProject(project)
        setEditorCreateFlag(create)
        setShowEditor(true)
    }

    const closeEditor = () => {
        setSelectedProject(exampleProject)
        setShowEditor(false)
    }

    // const openDeletePopup = (project: any) => {
    const openDelete = (project: any) => {
        setSelectedProject(project)
        setShowDelete(true)
    }

    const closeDelete = () => {
        setSelectedProject(exampleProject)
        setShowDelete(false)
    }

    const [elements, setElements] = useState<any>(null)
    
    const testElements = [
        {
            id: 0,
            title: "Github API Buffer",
            description: "A read only flask api for a single user. The API acts as a buffer between the true Github API and allows faster data retriveals by storing the users github data in a seperate database.",
            status: 'completed',
            githubUrl: 'https://github.com/crispycret/github-api',
            websiteUrl: 'https://github.com/crispycret/github-api',
            previewUrl: '',
        },
    ]

    const create_elements_test = () => {
        // if (!manager.projects) { return }
        
        // setElements(manager.projects.map((project: any, i: number) => {
        setElements(testElements.map((project: any, index: number) => {
            const _props = {project, index, openEditor, openDelete}
            return (
                // <div key={index} />
                <ProjectEntry key={index} {..._props}/>
            )
        }
        ))
    }

    
    const create_elements = () => {
        console.log("CREATE ELEMENTS")
        setElements(props.apis.portfolio.projectManager.projects.map((project: any, index: number) => {
            const _props = {project, index, openEditor, openDelete}
            return (
                <ProjectEntry key={index} {..._props}/>
            )
        }
        ))
    }

    const {
        isMobile, isNotMobile, 
        ifMobile, ifMobileDefault
    } = useIsMobile()
    
    useEffect(() => {
        create_elements()
    }, [props.apis.portfolio.projectManager.projects])

    return(
        <>
            <ProjectEditor
                apis={props.apis}
                show={showEditor} 
                setShow={setShowEditor} 
                project={selectedProject}
                create={editorCreateFlag}
            />
            
            {/* {editorElement} */}

            <DeleteProject 
                {...props}
                show={showDelete} 
                setShow={setShowDelete} 
                project={selectedProject}
                />

            <ListGroup className={`my-5 ${ifMobile('px-0')}`}>
                <ListGroup.Item variant='dark' className='list-group-container'>
                    <ProjectToolbar openEditor={openEditor}/>
                </ListGroup.Item>

                <ListGroup.Item variant='dark' className={`list-group-container ${ifMobile('px-0')}`}>
                    <ProjectShowcase {...props} openEditor={openEditor} openDelete={openDelete}/>
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