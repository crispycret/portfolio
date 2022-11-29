import axios, { AxiosInstance, AxiosResponse } from 'axios'
import userManager from './UserManager'

// export const axios = require('axios');


export const Portfolio = () => {

    let config = {
        // baseURL: process.env.REACT_APP_PORTFOLIO_API_ENDPOINT,
        baseURL: 'http://127.0.0.1:5000',
        headers: {}
    }

    console.log(process.env)
    

    let client = axios.create(config)

    const reconnect = () => {
        client = axios.create(config)
    }

    const setAuthorizationToken = (token: string) => {
        portfolio.client.defaults.headers.common['Authorization'] = token
    }

    const deleteAuthorizationToken = () => {
        delete portfolio.client.defaults.headers.common['Authorization']
    }

    return {
        config,
        client,
        reconnect,
        setAuthorizationToken,
        deleteAuthorizationToken
    }

}

// export default Portfolio();

export const portfolio = Portfolio()
export default portfolio;
