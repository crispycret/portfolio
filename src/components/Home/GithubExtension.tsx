import { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { FaGithub, FaGithubSquare } from "react-icons/fa";

import Github from "../../helpers/api/github";
import {get_newest_commit, Repo, Commit} from "../../helpers/api/github";




const timeAgo = (date: string) => {
    var time = Date.parse(date)
    var seconds = Math.floor((Date.now() - time) / 1000);
    var interval = seconds / 31536000;

    if (interval > 1) return Math.floor(interval) + " years";
    interval = seconds / 2592000;
    
    if (interval > 1) return Math.floor(interval) + " months";
    interval = seconds / 86400;
    
    if (interval > 1) return Math.floor(interval) + " days";
    interval = seconds / 3600;
    
    if (interval > 1) return Math.floor(interval) + " hours";
    interval = seconds / 60;
    
    if (interval > 1) return Math.floor(interval) + " minutes";
    return Math.floor(seconds) + " seconds";
}





export const GithubExtension = () => {

    const useOnMount = (fun: () => void) => useEffect(() => {
        fun()
    }, [])


    const [repos, setRepos] = useState<Array<Repo> | null>(null) 
    const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null) 
    const [selectedCommit, setSelectedCommit] = useState<Commit | null>(null) 
    const [selectedCommitMessageLength, setSelectedCommitMessageLength] = useState<number | null>(null)
    const messagePreviewLength = 50

    /**
     * Make a request to the database to get the latest worked on repos.
     * Store this state to use in JSX
     */
    // Update the github API database every hour.


    useEffect(() => {
        console.log(selectedRepo)
    }, [selectedRepo])

    const setup = () => {
        // update_github_section
        Github.get_last_worked_on_repos().then(response => {
            let _repos = response.data
            let _repo = _repos[0]
            let _commit = get_newest_commit(_repo)
            setRepos(_repos)
            setSelectedRepo(_repo)
            setSelectedCommit(_commit)
            console.log(_commit.message)
            setSelectedCommitMessageLength(_commit.message.length)
        })
    }

    useOnMount(setup)

    
    return (
        <>{ selectedRepo != null && selectedCommit != null &&

            <Container id='github-ext' className='col-5 mx-auto my-2 border border-3 rounded border-dark text-black'>
                <Row>
                    <Col className='col-1'>
                        <Col className='mt-2'>
                            <FaGithub style={{fontSize:'26px', color: 'black'}} />
                        </Col>
                    </Col>

                    <Col className='border-start border-dark'>
                        <Row>
                            <Col className='col-9'>{selectedRepo.name}</Col>
                            <Col className='col-3'>Updated</Col>
                        </Row>
                        <Row>
                            <Col className='col-9' style={{fontSize:'14px'}}>
                                {selectedCommit.message.substring(0, messagePreviewLength)} 
                                {selectedCommitMessageLength != null && selectedCommitMessageLength > messagePreviewLength && "..."}
                            </Col>            
                            <Col className='col-3'  style={{fontSize:'14px'}}>
                                {timeAgo(selectedCommit.created_at)} ago
                            </Col>            
                        </Row>
                        <Row>
                            <Col>
                                {/* {selectedRepo.description.substring(0,200)} */}
                            </Col> 
                        </Row>
                    </Col>
                </Row>
            </Container>
        }</>
    )
}


export default GithubExtension;






export const GithubExtensionMobile = () => {

    const useOnMount = (fun: () => void) => useEffect(() => {
        fun()
    }, [])


    const [repos, setRepos] = useState<Array<Repo> | null>(null) 
    const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null) 
    const [selectedCommit, setSelectedCommit] = useState<Commit | null>(null) 
    const [selectedCommitMessageLength, setSelectedCommitMessageLength] = useState<number | null>(null)
    const messagePreviewLength = 50

    /**
     * Make a request to the database to get the latest worked on repos.
     * Store this state to use in JSX
     */
    // Update the github API database every hour.


    useEffect(() => {
        console.log(selectedRepo)
    }, [selectedRepo])

    const setup = () => {
        // update_github_section
        Github.get_last_worked_on_repos().then(response => {
            let _repos = response.data
            let _repo = _repos[0]
            let _commit = get_newest_commit(_repo)
            setRepos(_repos)
            setSelectedRepo(_repo)
            setSelectedCommit(_commit)
            setSelectedCommitMessageLength(_commit.message.length)
        })
    }

    useOnMount(setup)

    
    return (
        <>{ selectedRepo != null && selectedCommit != null &&

            <Container id='github-ext' className='ms-0 ps-0 my-2 border rounded border-3 border-dark text-black'>
                <Row>
                    <Col className='col-2 my-auto' >
                        <FaGithub className='ms-1' style={{fontSize: '1.75em'}}/>
                    </Col>
                    <Col className='col-10 border-start border-dark'>
                        <Row>
                            <Col className='col-8 my-auto text-start' style={{fontSize:'16px'}}>{selectedRepo.name}</Col>
                            <Col className='col-4 my-auto text-center' style={{fontSize:'12px'}}>{timeAgo(selectedCommit.created_at)} ago</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        }</>
    )
}










