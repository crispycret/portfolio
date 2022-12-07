import { PropertySafetyFilled } from "@ant-design/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import portfolio from "./portfolio"

const sign = require('jwt-encode')

/**
 * Sub Module to porfolio api that handles user requests.
 * @param props 
 * @returns 
 */
export const UserManager = (props: any) => {

    /**
     * states belonging to UserManager
     */
    let [user, setUser] = useState<any | null>(null)
    let [validToken, setValidToken] = useState(false)

    const getToken = () => {return props.cookies.get('Authorization')}
    const hasToken = () => { return getToken() != undefined }
    const hasValidToken = () => { return validToken && hasToken() }

    /**
     * 
     * @param data -> porfolio api response data representing user data and authentication token.
     */
    const set = (data:any) => {
        if (user != data.user) setUser(data.user)
        if (validToken == false) setValidToken(true)
        props.cookies.set('user', data.user)
        props.cookies.set('Authorization', data.Authorization)
        props.headers.setAuthToken(data.Authorization)
    }

    const clear = () => {
        if (user != null) setUser(null)
        if (validToken == true) setValidToken(false)
        props.cookies.remove('user')
        props.cookies.remove('validToken')
        props.cookies.remove('Authorization')
        props.headers.deleteAuthToken()
    }

    const register = async(email: string, password: string, secret_key:string) => {
        if (user != null) return
        let _data = {username: 'admin', email, password}
        let _token = sign(_data, secret_key)
        let headers = {'Authorization': _token}
        let res = await props.client.post('/auth/create_admin', {}, {headers})
        .catch((error: any) => {
            return Promise.reject(error)
        })
        return res
    }

    const login = async (email: string, password: string) => {
        
        let data = {email, password}
        let res = await props.client.post('/auth/login', data)
        .catch((error:any) => {
            return Promise.reject(error)
        })
        if (res.status !== 200) {
            clear()
            return res
        }
        if (res.data.status != 200) {
            clear()
            return res
        }
        set(res.data.body)
        return res
    }


    const logout = async() => {
        
        props.headers.set('Authorization', getToken())
        // axios.defaults.headers.common['Authorization'] = getToken()

        if (!getToken()) return
        if (!validToken) return

        let res = await props.client.post('/auth/logout')
        .catch((error: any) => {
            console.log(error)
            return Promise.reject(error)
        })
        console.log(res)
        clear()
        return res
    }


    const validateToken = async() => {
        if (!getToken()) return
        if (!props.headers.get('Authorization')) return

        let res = await props.client.get('/auth/token/validate')
        .catch ((error: any) => {return Promise.reject(error)})

        if (res.status != 200) {
            console.log(res)
            clear()
            return res
        }
        if (res.data.status != 200) {
            console.log(res)
            clear()
            return res
        }

        if (!validToken) setValidToken(true)
        return res
    }


    const loadCookies = () => {
        if (!getToken()) {
            clear()
            return
        }

        const _user = props.cookies.get('user')
        if (!_user) { 
            clear() 
            return
        }
        
        setUser(user)
        props.headers.set('Authorization', getToken())
        validateToken()
        return
    }



    // Effect based on 
    useEffect(() => {
        loadCookies()
    }, [])

    
    
    return {
        validToken,
        register,
        login, 
        logout,
        hasToken,
        hasValidToken,
        validateToken
    }

}

// export const userManager = UserManager()
// export default userManager;

export default UserManager;