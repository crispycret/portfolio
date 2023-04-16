import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'


export const ProjectShowcaseAPI = (props: any) => {
    
    const [projects, setProjects] = useState<Array<any>>([])

    const fetch = async () => {
        let response = await props.client.get('projects/showcase')
        .catch ((error:any) => {
            return Promise.reject(error)
        })

        if (response.status !== 200) {
            return response
        }
        
        if (response.status === 200) {
            setProjects(response.data.body)
            return response
        }

        return response

    }

    const get = async (id: number) => {
        let response = await props.client.get(`projects/showcase/id/{id}`)
        .catch ((error:any) => {
            return Promise.reject(error)
        })

        if (response.status !== 200) {
            return response
        }
        
        if (response.status === 200) {
            return response
        }

        return response
    }

    const add = async (projects: any) => {
        const data = { projects }
        let response = await props.client.get('projects/showcase/add')
        .catch ((error:any) => {
            return Promise.reject(error)
        })

        if (response.status !== 200) {
            return response
        }
        
        if (response.status === 200) {
            return response
        }

        return response
    }

    const remove = async (projects: any) => {
        const data = { projects }
        let response = await props.client.get('projects/showcase/remove')
        .catch ((error:any) => {
            return Promise.reject(error)
        })

        if (response.status !== 200) {
            return response
        }
        
        if (response.status === 200) {
            return response
        }

        return response
    }

    const setOrder = async (projects: any) => {
        const data = { projects }
        let response = await props.client.get('projects/showcase/order', data)
        .catch ((error:any) => {
            return Promise.reject(error)
        })

        if (response.status !== 200) {
            return response
        }
        
        if (response.status === 200) {
            return response
        }

        return response
    }

    return {
        projects, setProjects, fetch,
        get, add, remove, setOrder,
    }

}


export default ProjectShowcaseAPI;
