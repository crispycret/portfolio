import { useEffect, useState } from "react"
import portfolio from "./portfolio"

const sign = require('jwt-encode')


export const UserManager = () => {

    let [user, setUser] = useState<object | null>(null)
    let [token, setToken] = useState("")
    let [validToken, setValidToken] = useState(false)


    const login = async (email: string, password: string) => {
        
        const onLoginFailure = () => {
            setUser(null)
            setToken("")
            setValidToken(false)
            portfolio.deleteAuthorizationToken()
        }

        let data = {email, password}
        let res = await portfolio.client.post('/auth/login', data)
        .catch(error => {
            return Promise.reject(error)
        })
        if (res.status !== 200) {
            onLoginFailure()
            return res
        }
        if (res.data.status != 200) {
            onLoginFailure()
            return res
        }

        // Success
        setUser(res.data.body)
        setToken(res.data.Authorization)
        setValidToken(true)
        portfolio.setAuthorizationToken(res.data.Authorization)
        return res
    }


    const register = async(email: string, password: string, secret_key:string) => {
        if (user != null) return
        let _data = {username: 'admin', email, password}
        let _token = sign(_data, secret_key)
        let headers = {'Authorization': _token}
        let res = await portfolio.client.post('/auth/create_admin', {}, {headers})
        .catch(error => {
            return Promise.reject(error)
        })
        return res
    }


    const hasToken = () => { return token != "" }

    const validateToken = async() => {
        if (!user) return
        if (!hasToken()) return

        let res = await portfolio.client.get('/auth/validate_token')
        .catch (error => {return Promise.reject(error)})

        if (res.status != 200) {
            if (validToken) setValidToken(false)
            return res
        }
        if (res.data.status == 200) {
            if (!validToken) setValidToken(true)
            return res
        }
        if (validToken) setValidToken(false)
        return res
    }

    
    
    return {
        user,
        token,
        validToken,
        login, 
        register,
        hasToken,
        validateToken
    }

}

// export const userManager = UserManager()
// export default userManager;

export default UserManager;