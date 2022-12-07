import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import portfolio from './portfolio'





export const ProjectManager = (props: any) => {


    let [projects, setProjects] = useState<Array<any> | null>(null)

    const get = (id: number) => {
        if (!props.userManager.validToken) return null
        if (!projects) return

        for (let project of projects) {
            if (project.id == id) {
                return project
            }
        }
        return null
    }

    const fetch = async () => {
        if (!props.userManager.validToken) return

        let res = await props.apis.portfolio.client.get('/projects/')
        .catch ((error: any) => {
            return Promise.reject(error)
        })

        console.log(res)

        if (res.status != 200) {
            return res
        }

        if (res.data.status == 200) {
            setProjects(res.data.body)
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


    useEffect(() => {
        fetch()
    }, [])

    return {
        projects,
        fetch,
        get,
        create,
        remove,
        edit
    }
}


export default ProjectManager;


