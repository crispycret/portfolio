import axios, { AxiosInstance, AxiosResponse } from 'axios'
import userManager from './UserManager'

// export const axios = require('axios');


export const Portfolio = () => {

    let config = {
        baseURL: process.env.REACT_APP_PORTFOLIO_API_ENDPOINT,
        headers: {}
    }

    let client = axios.create(config)

    const reconnect = () => {
        client = axios.create(config)
    }

    const get_project_status = () => {
        
    }

    return {
        config,
        client,
        reconnect,
    }

}

// export default Portfolio();

export const portfolio = Portfolio()
export default portfolio;
