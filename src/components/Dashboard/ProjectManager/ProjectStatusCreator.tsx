
import { useState, useRef, useEffect } from "react"
import { Modal, Form, Button, Container, ListGroup, InputGroup } from "react-bootstrap"
import { propTypes } from "react-bootstrap/esm/Image"



export const ProjectStatusCreator = (props: any) => {

    const [newStatus, setNewStatus] = useState('')

    const sendCreateStatus = async() => {
        setNewStatus('')
        let response = await props.apis.portfolio.projectManager.statusManager.create(newStatus)
        console.log(response)
    }

    return (
        <Modal className='dark' show={props.show} onHide={props.onHide}>

            <Modal.Header closeButton>
                <Modal.Title>Project Status</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>New Status</Form.Label>
                        <InputGroup>
                            <Form.Control className='dark' type='text' value={newStatus} onChange={(e:any) => setNewStatus(e.currentTarget.value)}></Form.Control>
                            <Button variant='secondary' onClick={() => sendCreateStatus()}>Add</Button>
                        </InputGroup>
                        </Form.Group>
                </Form>

                <div className='my-2' />

                <ListGroup className='text-center'>
                    { props.apis.portfolio.projectManager.statusManager.statuses.length === 0 &&
                        <ListGroup.Item variant="dark"> There are no Statuses</ListGroup.Item>
                    }
                    
                    {props.apis.portfolio.projectManager.statusManager.statuses.map((status: any, index: number) =>
                        <ListGroup.Item key={index} variant="dark">{ status.name }</ListGroup.Item>
                    )}
                </ListGroup>
            </Modal.Body>

        </Modal>
    )

}


export default ProjectStatusCreator;