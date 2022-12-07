import { useState, useRef } from "react"
import { Modal, Form, Button, Container} from "react-bootstrap"
import { isNonNullChain } from "typescript"



export const ProjectEditor = (props: any) => {

    const newProject = {
        title: "Project Title",
        description: "Project Description",
        status: 'completed',
        githubUrl: 'https://github.com/crispycret/',
        websiteUrl: 'https://github.com/crispycret/',
        previewUrl: '',
    }

    // If project is null, we are creating a project.
    const [title, setTitle] = useState(props.project ? props.project.title : newProject.title)
    const [githubUrl, setGithubUrl] = useState(props.project ? props.project.githubUrl : newProject.githubUrl)
    const [websiteUrl, setWebsiteUrl] = useState(props.project ? props.project.websiteUrl : newProject.websiteUrl)
    const [description, setDescription] = useState(props.project ? props.project.description : newProject.description)
    const [status, setStatus] = useState(props.project ? props.project.status : newProject.status)

    const imageRef = useRef<HTMLInputElement>(null)
    const [imageSrc, setImageSrc] = useState(props.project ? props.project.previewUrl : newProject.previewUrl)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        props.setShow(false)
    }

    const onImageSelected = (e:any) => {
        if (imageRef.current && imageRef.current.files) {
            let image = imageRef.current?.files?.item(0)
            if (image) {
                setImageSrc(URL.createObjectURL(image) || '')
            }
        }

    }

    return (
        <Modal show={props.show} onHide={() => props.setShow(false)}>
            <Form onSubmit={(e:any) => handleSubmit(e)}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.project ? props.project.title : newProject.title}</Modal.Title>
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
                        <Form.Control type="text" placeholder="Status" 
                            value={status} 
                            onChange={e => setStatus(e.currentTarget.value)}
                        />
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

                    {imageSrc.length != 0 && 
                        <Form.Group>
                            <Container className="d-flex justify-content-center mt-3">
                                <img src={imageSrc} width={150} height={150}></img>
                            </Container>
                        </Form.Group>
                    }


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">Save</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )

} 