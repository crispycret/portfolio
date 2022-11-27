import portfolio from "./portfolio"

const sign = require('jwt-encode')


export const UserManager = () => {

    let user = ""
    let token = ""
    let validToken = false


    const login = async (email: string, password: string) => {
        let data = {email, password}
        let res = await portfolio.client.post('/auth/login', data)
        .catch(error => {
            return Promise.reject(error)
        })
        if (res.status !== 200) {
            user = ""
            token = ""
            validToken = false
            delete portfolio.client.defaults.headers.common['Authorization']
            return res
        }

        if (res.data.status == 200) {
            user = res.data.body
            token = res.data.Authorization
            validToken = true
            portfolio.client.defaults.headers.common['Authorization'] = res.data.Authorization
            return res
        } 

        user = ""
        token = ""
        validToken = false
        delete portfolio.client.defaults.headers.common['Authorization']
        return res
    }


    const register = async(email: string, password: string, secret_key:string) => {
        if (user != null) return
        let data = {email, password}
        let token = sign(data, secret_key)
        let headers = {'Authorization': token}
        let res = await portfolio.client.post('/auth/create_admin', {}, {headers})
        .catch(error => {
            return Promise.reject(error)
        })
        return res
    }


    const hasToken = () => { return token != null }

    const validateToken = async() => {
        if (!hasToken) return

        let res = await portfolio.client.get('/auth/validate_token')
        .catch (error => {return Promise.reject(error)})

        if (res.status != 200) {
            if (validToken) validToken = false
            return res
        }
        if (res.data.status == 200) {
            if (!validToken) validToken = true
            return res
        }
        if (validToken) validToken = false
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

export const userManager = UserManager()
export default userManager;