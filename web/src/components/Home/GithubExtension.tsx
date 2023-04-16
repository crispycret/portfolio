import { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { FaGithub, FaGithubSquare } from "react-icons/fa";

import github from "../../helpers/api/github/GithubAPI";
import {get_newest_commit, Repo, Commit} from "../../helpers/api/github/GithubAPI";

import useIsMobile from "../../helpers/hooks/useIsMobile";
import { timeAgo } from "../../helpers/utils/time";


export const GithubExtension = (props: any) => {

    const {isMobile, isNotMobile} = useIsMobile()

    const MINUTE_MS = 60000;

    const update = () => {
        props.apis.github.update().then((response: any) => {
            updateSelectedRepo()
        })
    }

    const updateSelectedRepo = () => {
        props.apis.github.get_last_worked_on_repos().then((response: any) => {
            let _repos = response.data
            let _repo = _repos[0]
            let _commit = get_newest_commit(_repo)
            setRepos(_repos)
            setSelectedRepo(_repo)
            setSelectedCommit(_commit)
            setSelectedCommitMessageLength(_commit.message.length)
        })
    }

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
        const interval = setInterval(() => {
            update()
        }, MINUTE_MS * 30)

        return () => clearInterval(interval)

    }, [selectedRepo])


    const setup = () => {
      updateSelectedRepo()
    }

    useOnMount(setup)

    
    return (
        <>{ selectedRepo != null && selectedCommit != null &&

            <>
            { isNotMobile &&
                <Container id='github-ext' className='col-5 mx-auto border border-3 rounded border-dark text-black'>
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
            }
            
            { isMobile &&
                <Container id='github-ext' className='ms-0 ps-0 my-2 border rounded border-3 border-dark text-black'>
                    <a href={selectedRepo.html_url} className='text-black' style={{textDecoration: 'none'}}>
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
                    </a>
                </Container>
            }
            </>
            
        }</>
    )
}


export default GithubExtension;
