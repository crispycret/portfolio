
import { useEffect } from "react";
import { useCookies } from "react-cookie";


export const CookieManager = (props: any) => {
    const [cookies, setCookie, removeCookie] = useCookies();

    const get = (key: string) => {return cookies[key]}

    useEffect(() => {}, [])

    return { 
        cookies, get, set:setCookie, remove:removeCookie,
    }
}


export default CookieManager;