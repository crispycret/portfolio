import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

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

    /**
     * Make a request to the database to get the latest worked on repos.
     * Store this state to use in JSX
     */
    // Update the github API database every hour.


    useEffect(() => {
        console.log("UPDATE")
        console.log(selectedRepo)
    }, [selectedRepo])

    const setup = () => {
        Github.test().then((response) => {
            console.log(response)
        })
        // update_github_section
        Github.get_last_worked_on_repos().then(response => {
            console.log(response)
            console.log(response.data)
            let _repos = response.data
            let _repo = _repos[0]
            let _commit = get_newest_commit(_repo)
            setRepos(_repos)
            setSelectedRepo(_repo)
            setSelectedCommit(_commit)

        })
    }

    useOnMount(setup)

    
    return (
        <>{ selectedRepo != null && selectedCommit != null &&
            <Card className="bg-dark text-white square border border-success mt-5">
                <Card.Body>
                    <Row>
                        <Col>{selectedRepo.name}</Col>
                        <Col>last commit</Col>
                    </Row>
                    <Row>
                        <Col>{selectedCommit.message.substring(0, 25)+"..."}</Col>            
                        <Col>{timeAgo(selectedCommit.created_at)} ago</Col>            
                    </Row>
                    <Row>
                        <Col>
                            {/* {selectedRepo.description.substring(0,200)} */}
                        </Col> 
                    </Row>
                </Card.Body>
            </Card>
        }</>
    )
}


export default GithubExtension;