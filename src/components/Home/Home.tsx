import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

import useIsMobile from '../../helpers/hooks/useIsMobile'

import { HomeHeader, HomeHeaderMobile } from "./Header"
import GithubExtension, {GithubExtensionMobile} from "./GithubExtension"


export const Home = () => {

    const [isMobile, isNotMobile] = useIsMobile()
   

    return (
        <div id="Home">

            {isMobile && <>
                <HomeHeaderMobile />
                <div className="py-1"></div>
                <GithubExtensionMobile />
            </>}

            {isNotMobile && <>
                <HomeHeader/>
                <GithubExtension/>
            </>} 

        </div>
    )
}

export default Home;