import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { useCookies } from "react-cookie";

import CookieManager from '../utils/CookieManager';
import HeaderManager from '../utils/HeaderManager';
import UserManagerAPI from './UserManagerAPI'
import ProjectManagerAPI from './ProjectManager/ProjectManagerAPI';


export const PortfolioAPI = () => {

    let config = {
        // baseURL: process.env.REACT_APP_PORTFOLIO_API_ENDPOINT,
        baseURL: 'http://127.0.0.1:5000',
        headers: {}
    }

    let client = axios.create(config)
    const reconnect = () => {client = axios.create(config)}

    // const baseProps = {config, client, reconnect}

    const cookies = CookieManager({config, client, reconnect})
    const headers = HeaderManager({config, client, reconnect})
    // const headers = HeaderManager(baseProps)

    const props = {
        config, client, reconnect,
        cookies, headers,
    }

    const userManager = UserManagerAPI(props)
    const projectManager = ProjectManagerAPI({...props, userManager})

    // return {
    //     ...props,
    //     userManager,
    //     projectManager
    // }

    return {
        config,
        client,
        reconnect,
        cookies,
        headers,
        userManager,
        projectManager,
    }

}

export default PortfolioAPI;

// export const portfolioAPI = PortfolioAPI()
// export default portfolioAPI;