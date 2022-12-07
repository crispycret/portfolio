
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
            let res = await props.client.get('/projects/statuses')
            if (res.data.status == 200) {
                statuses = res.data.body
            }
        } catch(err) {
            statuses = []
        }
    }

    const create = async (data:any) => {
        if (!props.userManager.hasToken()) return
        let res = await props.client.get('/projects/create', data=data)
        .catch((error: any) => {
            return Promise.reject(error)
        })

        if (res.status != 200) return res
        if (res.data.status == 200) fetch()
        return res
    }
    
    const remove = async (id:number) => {
        if (!props.userManager.hasToken()) return
        let res = await props.apis.portfolio.client.get(`/projects/id/${id}/delete`)
        .catch((error: any) => {
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


export default ProjectStatusManager;