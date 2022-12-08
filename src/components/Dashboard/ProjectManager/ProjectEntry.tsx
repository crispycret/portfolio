
import { useEffect, useState } from 'react'
import { Link, NavLink} from 'react-router-dom';
import { Badge, Card, Col, Container, Dropdown, ListGroup } from 'react-bootstrap';

import { RxDragHandleDots1 } from 'react-icons/rx'
import {SlOptionsVertical} from 'react-icons/sl'
import useIsMobile from '../../../helpers/hooks/useIsMobile';



export type Props = {
    children?: JSX.Element,
    className?:string,
    onClick?:any,
    index?: number,
    draggable?:boolean,
    onDragStart?:(e:any, index:number | undefined) => {},
    onDragOver?:(e:any, index:number | undefined) => {},
    onDrop?:(e:any, index:number | undefined) => {},
}

export const ListGroupItemDark = ({
    children, className, onClick, index,
    draggable=false, onDragStart, onDragOver, onDrop
}: Props) => 
    <ListGroup.Item as="li" variant="dark" onClick={onClick}
        className={`d-flex justify-content-between align-items-start me-1 ${className? className : ''}`}
        draggable={draggable}
        onDragStart={e => onDragStart ? onDragStart(e, index) : undefined}
        onDragOver={e => onDragOver ? onDragOver(e, index) : undefined}
        onDrop={e => onDrop ? onDrop(e, index) : undefined}
      >
        {children}
    </ListGroup.Item>


export const ProjectInfo = ({project, descriptionLimit=100}: any) => {
    return (
        <div>
            <div className="fw-bold ms-2 d-flex">{project.title}</div>
                <div className='text-start'>
                    {project.description.substring(0, descriptionLimit)}..
                </div>
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
        <RxDragHandleDots1 className='my-auto' style={{}} fontSize={24} />




export const ProjectEntry = ({
    project, index, 
    descriptionLimit=undefined,
    openEditor, openDelete,
    draggable, onDragStart, onDragOver, onDrop,
}: any) => 
    <ListGroup horizontal>
        <ListGroupItemDark className='px-0'
            index={index}
            draggable={draggable}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
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

