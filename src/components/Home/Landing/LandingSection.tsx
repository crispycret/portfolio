import { useEffect, useState } from "react"

import { Col, Container, Row } from "react-bootstrap"

import useIsMobile from '../../../helpers/hooks/useIsMobile'
import Github from "../../../helpers/api/github"

import GithubExtension, {GithubExtensionMobile} from "./GithubExtension"
import { LandingHeader, LandingHeaderMobile } from "./LandingHeader"


export const LandingSection = () => {

    const [isMobile, isNotMobile] = useIsMobile()
   

    return (
        <div id="LandingSection">

            {isMobile && <>
                <div id='bubble-1' />
                <div id='bubble-2' />
                <LandingHeaderMobile />
                <GithubExtensionMobile />
            </>}

            {isNotMobile && <>
                <LandingHeader />
                <GithubExtension/>
            </>} 

        </div>
    )
}