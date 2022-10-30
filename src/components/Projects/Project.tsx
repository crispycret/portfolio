import { useEffect, useState } from "react"
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"

import { FaGithub, FaCross, FaCheck, FaCheckCircle } from "react-icons/fa"
import {ImCross} from 'react-icons/im'

import github, { get_newest_commit } from "../../helpers/api/github"
import useIsMobile from "../../helpers/hooks/useIsMobile"
import GradientText from "../../helpers/utils/GradientText"
import { timeAgo } from "../../helpers/utils/time"


export interface ProjectInterface {
    name: string,
    summary: string,
    completed: boolean,
    githubUrl: string,
    websiteUrl: string,
    imageUrl: string,
}

export const Project = (props:ProjectInterface) => {

    const [isMobile, isNotMobile] = useIsMobile()
    
    const default_date = Date.UTC(1999, 12, 31, 23, 59, 59)

    const [updatedTime, setUpdatedTime] = useState(default_date.toString())

    const get_updated_time = () => {
        let split = props.githubUrl.split('/')
        let repo_name = split[split.length-1]

        github.get_repo_by_name(repo_name).then(response => {
            let repo = response.data
            let commit = get_newest_commit(repo)
            let time = timeAgo(commit.created_at)
            setUpdatedTime(time)
        }).catch(error => {
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
                <Card className='bg-dark text-white square border border-success mt-5'>
                    <Card.Img src={props.imageUrl} alt="IMAGE GOES HERE"></Card.Img>
                    
                    <Card.Header>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>{props.summary}</Card.Text>
                    </Card.Header>

                    <ListGroup className='bg-dark text-white square border border-success mt-5'>
                        <ListGroupItem className='bg-dark text-white square border border-success'>
                            Completed: {props.completed.toString()}
                        </ListGroupItem>
                    </ListGroup>
                    
                    <Card.Body>
                        <Card.Link>Github</Card.Link>
                        <Card.Link>Website</Card.Link>
                    </Card.Body>
                </Card>
            }


            { isMobile && 
                <Card className='bg-dark text-white square border border-success mt-2'>
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