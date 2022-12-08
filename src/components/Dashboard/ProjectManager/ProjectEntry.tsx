
import { useEffect, useState } from 'react'
import { Link, NavLink} from 'react-router-dom';
import { Badge, Card, Col, Container, Dropdown, ListGroup } from 'react-bootstrap';

import { RxDragHandleDots1 } from 'react-icons/rx'
import {SlOptionsVertical} from 'react-icons/sl'
import useIsMobile from '../../../helpers/hooks/useIsMobile';



export type Props = {
    className?:string,
    onClick?:any,
    children: JSX.Element,
}

export const ListGroupItemDark = ({className, onClick, children}: Props) => 
    <ListGroup.Item as="li" variant="dark" onClick={onClick}
        className={`d-flex justify-content-between align-items-start me-1 ${className? className : ''}`}
    >
        {children}
    </ListGroup.Item>


export const ProjectInfo = ({project, descriptionLimit=100}: any) => {
    const [isMobile, isNotMobile] = useIsMobile()
    return (
        <div>
            <div className="fw-bold ms-2 d-flex">{project.title}</div>
            {/* { isNotMobile &&  */}
                <div className='text-start'>
                    {project.description.substring(0, descriptionLimit)}..
                </div>
            {/* } */}
        </div>
    )
}


{/* <div className='my-auto'><SlOptionsVertical/></div> */}
export const ProjectOptions = ({project, openEditor, openDelete}: any) => 
    <Dropdown className='p-0 m-0 h-100 rounded-end' >
      <Dropdown.Toggle className='p-0 my-auto rounded-end h-100' variant='dark'>
        <SlOptionsVertical/>
      </Dropdown.Toggle>

      <Dropdown.Menu variant='dark'>
        <Dropdown.Item onClick={() => openEditor(project)}>Edit</Dropdown.Item>
        <Dropdown.Item className='danger' onClick={() => openDelete(project)}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


export const ProjectDragAndDrop = () => 
    <>
        <RxDragHandleDots1 className='my-auto' style={{}} fontSize={24} />
    </>




export const ProjectEntry = ({project, openEditor, openDelete, key, descriptionLimit=undefined}: any) => 
    <ListGroup horizontal key={key}>
        <ListGroupItemDark className='px-0'>
            <ProjectDragAndDrop />
        </ListGroupItemDark>
        <ListGroupItemDark className='w-100' onClick={() => openEditor(project)}>
            <ProjectInfo project={project} descriptionLimit={descriptionLimit}/>
        </ListGroupItemDark>
        <ListGroupItemDark className='options p-0 m-0'>
            <ProjectOptions project={project} openEditor={openEditor} openDelete={openDelete}/>
        </ListGroupItemDark>
    </ListGroup>


export default ProjectEntry;

