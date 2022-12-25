import axios from 'axios'
import { useEffect } from 'react'

export const HeaderManager = (props: any) => {

    // const get = (key: string) => { return axios.defaults.headers.common[key] }
    // const set = (key: string, value: string) => { axios.defaults.headers.common[key] = value }
    // const remove = (key: string) => { delete axios.defaults.headers.common[key] }

    const get = (key: string) => { return props.client.defaults.headers.common[key] }
    const set = (key: string, value: string) => { props.client.defaults.headers.common[key] = value }
    const remove = (key: string) => { delete props.client.defaults.headers.common[key] }

    const getAuthToken = () => { return get('Authorization') }
    const setAuthToken = (token: string) => { set('Authorization', token) }
    const deleteAuthToken = () => { remove('Authorization') }

    useEffect(() => {}, [])
    return { 
        get, set, remove,
        getAuthToken, setAuthToken, deleteAuthToken,
    }
}

export default HeaderManager;