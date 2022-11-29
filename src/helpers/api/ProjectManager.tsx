import axios, { AxiosInstance, AxiosResponse } from 'axios'
import portfolio from './portfolio'


export const ProjectStatusManager = (props: any) => {

    let statuses = new Array<any>()

    const get = async(id: number) => {
        if (statuses.length == 0) return
        for (let status of statuses) {
            if (status.id == id) 
                return status
        }
        return null
    }

    const fetch = async() => {
        if (!props.userManager.hasToken()) return
        try {
            let res = await portfolio.client.get('/projects/statuses')
            if (res.data.status == 200) {
                statuses = res.data.body
            }
        } catch(err) {
            statuses = []
        }
    }

    const create = async (data:any) => {
        if (!props.userManager.hasToken()) return
        let res = await portfolio.client.get('/projects/create', data=data)
        .catch(error => {
            return Promise.reject(error)
        })

        if (res.status != 200) return res
        if (res.data.status == 200) fetch()
        return res
    }
    
    const remove = async (id:number) => {
        if (!props.userManager.hasToken()) return
        let res = await portfolio.client.get(`/projects/id/${id}/delete`)
        .catch(error => {
            return Promise.reject(error)
        })

        if (res.status != 200) return res
        if (res.data.status == 200) fetch()
        return res
    }

    return {
        statuses,
        get,
        fetch,
        create,
        remove
    }


}


export const ProjectManger = (props: any) => {

    let projects = Array<any>()

    const get = (id: number) => {
        if (!props.userManager.validToken) return null
        for (let project of projects) {
            if (project.id == id) {
                return project
            }
        }
        return null
    }

    const fetch = async () => {
        if (!props.userManager.validToken) return

        let res = await portfolio.client.get('/projects/')
        .catch (error => {
            return Promise.reject(error)
        })

        if (res.status != 200) {
            return res
        }

        if (res.data.status == 200) {
            projects = res.data.body
            return res
        }
        return res
    }

    const create = () => {
        if (!props.userManager.validToken) return

    }
    const remove = () => {
        if (!props.userManager.validToken) return

    }
    const edit = () => {
        if (!props.userManager.validToken) return

    }

    return {
        
    }
}
