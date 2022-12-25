import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import ShowcaseAPI  from './ProjectShowcaseAPI'
import ProjectStatusManagerAPI from './ProjectStatusManagerAPI'



export const ProjectManagerAPI = (props: any) => {

    let [projects, setProjects] = useState<Array<any>>([])
    const showcaseManager = ShowcaseAPI(props)
    const statusManager = ProjectStatusManagerAPI(props)

    const fetch = async () => {
        if (!props.userManager.hasToken()) return
        props.userManager.applyHeaders()

        let res = await props.client.get('/projects/')
        .catch ((error: any) => {
            return Promise.reject(error)
        })

        console.log(res)

        if (res.status !== 200) {
            return res
        }

        if (res.data.status === 200) {
            setProjects(res.data.body)
            return res
        }
        return res
    }

    const get = (id: number) => {
        if (!props.userManager.validToken) return null
        if (!projects) return

        for (let project of projects) {
            if (project.id === id) {
                return project
            }
        }
        return null
    }

    const create = async(project: any) => {
        console.log("CREATE")
        if (!props.userManager.hasToken()) return
        props.userManager.applyHeaders()

        // validate project information

        let response = await props.client.post('/projects/create', project)
        .catch ((error: any) => {
            return Promise.reject(error)
        })

        console.log(response)
        
        if (response.status !== 200) {
            return response
        }

        if (response.data.status === 200) {
            fetch()
            return response
        }
        return response
    }

    const remove = () => {
        if (!props.userManager.validToken) return

    }
    const edit = async (project: any) => {
        if (!props.userManager.validToken) return

        props.userManager.applyHeaders()

        // validate project information.
        const data = { project }
        let response = await props.client.patch('projects/edit', data)
        .catch((error:any) => {
            return Promise.reject(error)
        })

        if (response.status !== 200) {
            return response
        }

        if (response.data.status !== 200) {
            return response
        }

        fetch()
        return response
    }


    useEffect(() => {
        fetch();
    }, [])

    return {
        projects,
        fetch,
        get,
        create,
        remove,
        edit,
        statusManager,
        showcaseManager,
    }
}


export default ProjectManagerAPI;


