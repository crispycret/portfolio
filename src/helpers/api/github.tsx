
import axios, { AxiosInstance, AxiosResponse } from 'axios'
// export const axios = require('axios');



/**
 * Given a repo retireved from the api, return it's latest commit.
 * @param repo 
 * @returns commit: object
 */
 export const get_newest_commit = (repo: any) => {
    let newest_commit = repo.commits[0]
    let newest_commit_time = Date.parse(newest_commit.created_at)

    for (let commit of repo.commits) {
        let time = Date.parse(commit.created_at)
        if (time > newest_commit_time) {
            newest_commit = commit
            newest_commit_time = time
        }      
    }
    return newest_commit
}



export interface Repo {
    id: number,
    name: string,
    author: string,
    created_at: string,
    commits: Array<Commit>,
    html_url: string
}

export interface Commit {
    id: number,
    repo_id: number,
    author: string,
    created_at: string,
    message: string,
}

export interface ClientConfig {
    baseURL: string;
    timeout: number;
    headers: {};
}



export interface GithubInterface { 
    test: () => Promise<AxiosResponse<any, any>>; 
    update: () => Promise<AxiosResponse<any, any>>; 
    client_config: { baseURL: string; timeout: number; headers: {}; }; 
    client: AxiosInstance; 
    create_client: () => void; 
    get_last_worked_on_repos: (limit?: number) => Promise<AxiosResponse<any, any>>; 
    get_repo_by_name: (name: string) => Promise<AxiosResponse<any, any>>; 
}

export const Github = () => {

    let client_config = {
        baseURL: process.env.REACT_APP_GITHUB_API_ENDPOINT,
        headers: {}
    }

    // https://axios-http.com/docs/instance
    let client = axios.create(client_config)

    const create_client = () => {
        client = axios.create(client_config)
    }


    const test = async () => {
        return await client.get('/test')
    }
    
    
    const update = async () => {
        return await client.get('/update')
    }
    
    
    /**
     * Return a list conataining the specified number of repos with the latest commits. 
     * @param limit 
     * @returns 
     */
    const get_last_worked_on_repos = async (limit=1) => {
        return await client.get(`/repo/last-modified?limit=${limit}`)
    }

    const get_repo_by_name = async (name: string) => {
            return await client.get(`/repo/${name}`) 
    }
    
    

    
    return ({
        test, 
        update,
        client_config,
        client,
        create_client,
        get_last_worked_on_repos,
        get_repo_by_name
    } as GithubInterface)
}


export default Github()
