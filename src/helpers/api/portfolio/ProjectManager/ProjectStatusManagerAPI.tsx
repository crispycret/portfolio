import { useEffect, useState } from "react"

export const ProjectStatusManagerAPI = (props: any) => {

    let [statuses, setStatuses] = useState<Array<any>>([])

    const fetch = async() => {
        if (!props.userManager.hasToken()) return
        props.userManager.applyHeaders()

        let res = await props.client.get('/projects/statuses')
        .catch ((error: any) => {return Promise.reject(error)})
        
        if (res.status !== 200) {
            setStatuses([])
            return res
        }

        if (res.data.status === 200) {
            setStatuses(res.data.body)
            return res
        }

    }

    
    const get = async(id: number) => {
        if (statuses.length === 0) return
        for (let status of statuses) {
            if (status.id === id) 
                return status
        }
        return null
    }

    const create = async (name:string) => {
        if (!props.userManager.hasToken()) return
        
        props.userManager.applyHeaders()

        let data = {'name': name}
        let res = await props.client.post('/projects/status/create', data=data)
        .catch((error: any) => {
            return Promise.reject(error)
        })

        if (res.status !== 200) return res
        if (res.data.status === 200) fetch()
        return res
    }
    
    const remove = async (id:number) => {
        if (!props.userManager.hasToken()) return
        let res = await props.apis.portfolio.client.delete(`/projects/status/id/${id}/delete`)
        .catch((error: any) => {
            return Promise.reject(error)
        })

        if (res.status !== 200) return res
        if (res.data.status === 200) fetch()
        return res
    }

    useEffect(() => {
        fetch();
    }, [])

    return {
        statuses,
        fetch,
        get,
        create,
        remove
    }
}


export default ProjectStatusManagerAPI;