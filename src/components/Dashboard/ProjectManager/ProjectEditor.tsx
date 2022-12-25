import { useState, useRef, useEffect } from "react"
import { Modal, Form, Button, Container, InputGroup} from "react-bootstrap"
import { propTypes } from "react-bootstrap/esm/Image"
import ProjectStatusCreator from "./ProjectStatusCreator"


export type Props = {
    apis: any,
    show: any,
    setShow: any,
    handleHide?: any
    project: any,
    create: boolean // flag for creating a new project
}

export const ProjectEditor = ({
    apis, project, create=false,
    show, setShow, handleHide
}: Props) => {

    const [showStatusCreator, setShowStatusCreator] = useState(false)

    const openStatusCreator = () => {
        setShowStatusCreator(true)
        setShow(false)
    }

    const closeStatusCreator = () => {
        setShowStatusCreator(false)
        setShow(true)
    }

    // If project is null, we are creating a project.
    const [title, setTitle] = useState(project.title)
    const [githubUrl, setGithubUrl] = useState(project.githubUrl)
    const [websiteUrl, setWebsiteUrl] = useState(project.websiteUrl )
    const [description, setDescription] = useState(project.description)
    const [status, setStatus] = useState(project.status)

    const imageRef = useRef<HTMLInputElement>(null)
    const [imageSrc, setImageSrc] = useState<string>(project.imageUrl ? project.imageUrl : '')

    const closeEditor = () => {
        setShow(false)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()

        // Update Project State on the Backend
        
        // Create a new project object using the state variables.
        // ^ Create a Project object whose state can be changed on both fronend and backend
        const newProject = {
            title, githubUrl, websiteUrl, description, status,
            // Determine how to upload and store image.
        };

        if (create) {
            sendCreate(newProject)
        }
        else {
            // Must have the project Id for this to work.
            sendEdit(newProject)
        }
    }

    const onImageSelected = (e:any) => {
        if (imageRef.current && imageRef.current.files) {
            let image = imageRef.current?.files?.item(0)
            if (image) {
                // setImageSrc(URL.createObjectURL(image) || '')
            }
        }
    }



    const sendCreate = async ( project: any ) => {
        let response = await apis.portfolio.projectManager.create(project)
        .catch((error: any) => {return Promise.reject(error)})

        console.log(response)

        // status message
        // If 200, handleClose()
        if (response.status !== 200){
            console.log("Create Project Failed")
            return response
        }
        console.log(response.data.msg)
    }

    const sendEdit = async (project: any) => {
        let response = await apis.portfolio.projectManager.edit(project)
        .catch((error: any) => {return Promise.reject(error)})

        // status message
        // If 200, handleClose()
        if (response.status !== 200){
            console.log("Edit Project Failed")
            return response
        }
        console.log(response.data.msg)
    }

    useEffect(() => {
        setTitle(project.title)
        setDescription(project.description)
        setStatus(project.status)
        setGithubUrl(project.githubUrl)
        setWebsiteUrl(project.websiteUrl)
        setImageSrc(project.previewUrl)
    }, [project])

    // <Modal className='dark' show={show} onHide={() => handleHide()}>

    return (
        <>
            <ProjectStatusCreator 
                show={showStatusCreator} 
                setShow={setShowStatusCreator} 
                onHide={closeStatusCreator} 
                apis={apis} 
            />

            <Modal className='dark' show={show} onHide={() => setShow(false)}>
            
                <Form onSubmit={(e:any) => handleSubmit(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{project.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" 
                                value={title} 
                                onChange={e => setTitle(e.currentTarget.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Github</Form.Label>
                            <Form.Control type="url" placeholder="https://www.github.com/" 
                                value={githubUrl} 
                                onChange={e => setGithubUrl(e.currentTarget.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Website</Form.Label>
                            <Form.Control type="url" placeholder="https://www.google.com/" 
                                value={websiteUrl} 
                                onChange={e => setWebsiteUrl(e.currentTarget.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <InputGroup>
                                <Form.Select aria-label="status" value={status} onChange={(e:any) => setStatus(e.currentTarget.value)}>
                                    {apis.portfolio.projectManager.statusManager.statuses.map(
                                        (statusValue: any, index: number) =>
                                            <option key={index} value={statusValue.name}>{statusValue.name}</option>
                                    )}
                                </Form.Select>
                                <Button variant='secondary' onClick={() => openStatusCreator()}>New</Button>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as='textarea' rows={4} type="text" placeholder="Project description" 
                                value={description} 
                                onChange={e => setDescription(e.currentTarget.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Project Preview</Form.Label>
                            <Form.Control type="file" ref={imageRef} onChange={(e:any) => onImageSelected(e)}/>
                        </Form.Group>

                        {/* {imageSrc.length !== 0 && 
                            <Form.Group>
                                <Container className="d-flex justify-content-center mt-3">
                                    <img src={imageSrc} width={150} height={150}></img>
                                </Container>
                            </Form.Group>
                        } */}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">Save</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )

} 


export default ProjectEditor;



export const DeleteProject = ({apis, show, setShow, handleHide, project}: Props) => {

    const handleSubmit = (e: any) => {

    }

    // <Modal className='my-5 py-5 dark' show={show} onHide={() => handleHide()}>
    return (
        <Modal className='my-5 py-5 dark' show={show} onHide={() => setShow(false)}>
            <Form onSubmit={(e:any) => handleSubmit(e)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='text-center'>
                        Are you sure you want to delete "{project?.title || 'Project Title'}"?
                    </div>
                    <div className='text-center'>
                        This cannot be undone!
                    </div>
                    
                </Modal.Body>
                <Modal.Footer className='border-0'>                
                    <Button variant="danger" type="submit">Delete</Button>
                    <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
                </Modal.Footer>
                </Form>
        </Modal>
    )
}