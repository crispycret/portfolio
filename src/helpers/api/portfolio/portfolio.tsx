import axios, { AxiosInstance, AxiosResponse } from 'axios'
import userManager, { UserManager } from './UserManager'

import { useCookies } from "react-cookie";
import CookieManager from './CookieManager';
import HeaderManager from './HeaderManager';
import ProjectManager from './ProjectManager';


export const Portfolio = () => {

    let config = {
        // baseURL: process.env.REACT_APP_PORTFOLIO_API_ENDPOINT,
        baseURL: 'http://127.0.0.1:5000',
        headers: {}
    }

    let client = axios.create(config)
    const reconnect = () => {client = axios.create(config)}

    const baseProps = {
        config, client, reconnect
    }

    const cookies = CookieManager(baseProps)
    const headers = HeaderManager(baseProps)

    const props = {
        config,
        client,
        reconnect,
        cookies,
        headers,
    }

    const userManager = UserManager(props)
    const projectManager = ProjectManager({...props, userManager})

    return {
        ...props,
        userManager,
        projectManager
    }

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

// export default Portfolio();

export default Portfolio;
