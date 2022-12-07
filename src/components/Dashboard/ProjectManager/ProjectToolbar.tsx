import { useEffect, useState } from 'react'
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';

import { FaRegEdit } from 'react-icons/fa'
import { AiOutlineDelete, AiFillDelete } from 'react-icons/ai'
import { BiAddToQueue } from 'react-icons/bi'


export const ProjectToolbar = (props:any) => {
    return (
        <Container>
            <ListGroup horizontal>
                {/* <Link to='new' style={{textDecoration: 'none'}}> */}
                    <ListGroupItem variant='dark' className='border rounded'>
                        <BiAddToQueue onClick={() => props.openEditor(null)}/>
                    </ListGroupItem>
                {/* </Link> */}
            </ListGroup>
        </Container>
    )
}




export default ProjectToolbar;