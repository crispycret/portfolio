import { useEffect, useState } from "react"
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"

import { FaGithub, FaCross, FaCheck, FaCheckCircle } from "react-icons/fa"
import { ImCross } from 'react-icons/im'
import { AiOutlineLink } from 'react-icons/ai'

import useIsMobile from "../../helpers/hooks/useIsMobile"
import { timeAgo } from "../../helpers/utils/time"

import { get_newest_commit } from "../../helpers/api/github/GithubAPI"


export interface ProjectInterface {
    apis: any,
    name: string,
    summary: string,
    completed: boolean,
    githubUrl: string,
    websiteUrl: string,
    imageUrl: string,
}

export const Project = (props:ProjectInterface) => {

    const {isMobile, isNotMobile} = useIsMobile()
    
    const default_date = Date.UTC(1999, 12, 31, 23, 59, 59)

    const [updatedTime, setUpdatedTime] = useState(default_date.toString())

    const get_updated_time = () => {
        let split = props.githubUrl.split('/')
        let repo_name = split[split.length-1]

        props.apis.github.get_repo_by_name(repo_name).then((response: any) => {
            let repo = response.data
            let commit = get_newest_commit(repo)
            let time = timeAgo(commit.created_at)
            setUpdatedTime(time)
        }).catch((error: any) => {
            let time = timeAgo(default_date.toString())
            setUpdatedTime(time)
        })
    }

    useEffect (() => {
        get_updated_time()
    }, [])




    return (
        <>
            { isNotMobile &&
                <Card className='bg-dark text-white border rounded border-2 border-primary mt-5'>
                    
                    <Card.Header>
                        <Card.Title className='text-primary'>{props.name}</Card.Title>
                    </Card.Header>
                    <Card.Header>
                        <Card.Img src={props.imageUrl} alt="IMAGE GOES HERE"></Card.Img>
                    </Card.Header>
                    <Card.Header>
                        <Card.Text>{props.summary}</Card.Text>
                    </Card.Header>

                    <Card.Body className='mx-auto '>
                        <ListGroup horizontal>
                        <ListGroupItem className='mx-1 bg-dark text-primary border rounded border-primary border-2'>
                            <Card.Text>Complete {props.completed ? <FaCheck color='green'/> : <ImCross color='red'/>} </Card.Text>
                        </ListGroupItem>
                        <ListGroupItem className='mx-1 bg-dark text-primary border rounded border-primary border-2'>
                            <Card.Link style={{textDecoration:'none'}} href={props.githubUrl}>
                                <FaGithub className="my-auto me-1 text-middle"/>                
                                Code
                            </Card.Link>
                        </ListGroupItem>
                        <ListGroupItem className='mx-1 bg-dark text-primary border rounded border-primary border-2'>
                            <Card.Link style={{textDecoration:'none'}} href={props.websiteUrl}>
                            <AiOutlineLink className="my-auto me-1 text-middle"/>
                                View
                            </Card.Link>
                        </ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            }


            { isMobile && 
                <Card className='bg-dark text-white square border border-primary mt-2'>
                    <Card.Header>
                        <Card.Title>
                            <a href={props.githubUrl} style={{textDecoration:'none'}}>
                            <Row style={{fontSize: '18px'}}>
                                <Col className='col-1 my-auto text-middle'>
                                <FaGithub className="my-auto text-middle"/>                
                                </Col>
                                <Col className='col-10' style={{fontSize: '18px'}}>
                                    {props.name}
                                </Col>
                            </Row>
                            </a>
                        </Card.Title>
                    </Card.Header>
                    <Row>
                        <Card.Body style={{fontSize:'11px'}}>
                            <Row>
                                <Col className="text-start col-8 me-0 pe-1" style={{fontSize:'11px'}}>
                                    {props.summary.substring(0, 200)}...
                                </Col>
                                <Col className='col-4 ms-0 ps-0 my-auto'>
                                    <Card.Img style={{minWidth: '100%'}} src={props.imageUrl} alt="IMAGE GOES HERE"></Card.Img>
                                </Col>
                            </Row>
                            <Row className='mt-1'>
                                    <Col className='ms-0 pe-0 text-start'>
                                        Completed: {props.completed ? <FaCheck color='green'/> : <ImCross color='red'/> }
                                    </Col>
                                    <Col className='ms-0 ps-0 pe-2 me-2 text-end'>Updated: {updatedTime} ago</Col>
                            </Row>
                        </Card.Body>
                    </Row>
                </Card>
            }
        </>
    )
}


export default Project