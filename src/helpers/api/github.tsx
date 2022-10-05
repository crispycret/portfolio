export {}

export const axios = require('axios');


export const test = async () => {

    var config = {
        method: 'get',
        url: 'https://127.0.0.1:5000/',
        headers: {}
    }

    return await axios(config)
}


export const update = async () => {
    var config = {
        method: 'get', headers: {},
        url: `https://127.0.0.1:5000/update`,
    }
    return await axios(config)
}


/**
 * Return a list conataining the specified number of repos with the latest commits. 
 * @param limit 
 * @returns 
 */
export const get_repos_with_latest_commit = async (limit=1) => {
    var config = {
        method: 'get', headers: {},
        url: `https://127.0.0.1:5000/repo/last/modified?limit=${limit}`,
    }
    return await axios(config)
}



/**
 * Given a repo retireved from the api, return it's latest commit.
 * @param repo 
 * @returns commit: object
 */
export const get_last_commit_from_repo = (repo: any) => {
    let last_commit = repo.commits[0]
    let last_commit_time = Date.parse(last_commit.created_at)

    for (let commit of repo.commits) {
        let time = Date.parse(commit.created_at)
        if (time > last_commit_time) {
            last_commit = commit
            last_commit_time = time
        }      
    }
    return last_commit
}