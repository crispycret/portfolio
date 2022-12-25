import { useEffect, useState } from 'react'
import { Link, NavLink} from 'react-router-dom';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';

import { FaRegEdit } from 'react-icons/fa'
import { AiOutlineDelete, AiFillDelete } from 'react-icons/ai'
import { BiAddToQueue } from 'react-icons/bi'


export const ProjectToolbar = ({openEditor}:any) => {
    return (
        <Container>
            <ListGroup horizontal>
                {/* <Link to='new' style={{textDecoration: 'none'}}> */}
                    <ListGroupItem variant='dark' className='border rounded'>
                        <BiAddToQueue onClick={() => openEditor(null, true)}/>
                    </ListGroupItem>
                {/* </Link> */}
            </ListGroup>
        </Container>
    )
}




export default ProjectToolbar;