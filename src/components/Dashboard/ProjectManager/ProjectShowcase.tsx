
import { useEffect, useState } from 'react'
import { Link, NavLink} from 'react-router-dom';
import { Container, ListGroup } from 'react-bootstrap';
import ProjectEntry from './ProjectEntry';
import useIsMobile from '../../../helpers/hooks/useIsMobile';
import React from 'react';



export const ProjectShowcase = (props: any) => {

    // const manager = props.projectManager;

    const [isMobile, isNotMobile] = useIsMobile()

    const [elements, setElements] = useState<any>(null)

    const [projects, setProjects] = useState<Array<any>>([
        {
            title: "1 Github API Buffer",
            description: "A read only flask api for a single user. The API acts as a buffer between the true Github API and allows faster data retriveals by storing the users github data in a seperate database.",
            status: 'completed',
            githubUrl: 'https://github.com/crispycret/github-api',
            websiteUrl: 'https://github.com/crispycret/github-api',
            previewUrl: '',
        },
        {
            title: "Project 2",
            description: "TESTING.",
            status: 'completed',
            githubUrl: 'https://github.com/crispycret/github-api',
            websiteUrl: 'https://github.com/crispycret/github-api',
            previewUrl: '',
        },
        {
            title: "Project 3",
            description: "TESTING Again.",
            status: 'completed',
            githubUrl: 'https://github.com/crispycret/github-api',
            websiteUrl: 'https://github.com/crispycret/github-api',
            previewUrl: '',
        },
        {
            title: "Project 4",
            description: "And Again.",
            status: 'completed',
            githubUrl: 'https://github.com/crispycret/github-api',
            websiteUrl: 'https://github.com/crispycret/github-api',
            previewUrl: '',
        },
    ])

    

    // Drag and Drop Functionality for Projects Ordering

    // Define the dragging state to use a number that represents the selected index.
    const [dragging, setDragging] = useState<number | null>(null)

    // Event handler for when the user starts dragging a project.
    const onDragStart = (e: any, index: number) => {
        // Store the index of the project being dragged
        console.log(`Start Dragging ${index}`)
        setDragging(index)
    }

    // Event handler for when the user moves a project over another project
    // Make sure to update the index of the dragging state to prevent inifinite loops
    const onDragOver = (e: any, index:number) => {
        // Prevent default action
        e.preventDefault()

        console.log(`dragging ${dragging} over ${index}`)

        // Check if the project is not already in the desired position
        if (index !== dragging && dragging !== null) {

            console.log("Switching")

            // create a new copy of the projects list
            const newProjects:Array<any> = [...projects];

            // swap the project with the one at the desired position in the list
            [newProjects[index], newProjects[dragging]] = [newProjects[dragging], newProjects[index]]
  
            // update the state of the projects list
            setProjects(newProjects)

            // Update the dragging index to reflect the projects new location (Prevents Looping). 
            setDragging(index)
            console.log("Switching Done")
        }
    }


    // Event handler for dropping a project.
    const onDrop = (e:any, index:number) => {
        setDragging(null)
        console.log(`Drop ${index}`)
    }


    const create_elements = () => {
        setElements(projects.map((project:any, index :number) => {
            return (
                <ProjectEntry key={index}
                    project={project} 
                    index={index}
                    openEditor={props.openEditor} 
                    openDelete={props.openDelete} 
                    draggable
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    descriptionLimit={isMobile ? 80 : undefined}
                />
            )
        }))
    }

    useEffect(() => {
        create_elements()
    }, [projects, dragging])




    return (
        <>
            <ListGroup>
                {elements}
            </ListGroup>
            <Container className={`my-2 pb-2 project-showcase ${isMobile ? 'px-0' : ''}`} />
        </>
    )
}




export default ProjectShowcase;