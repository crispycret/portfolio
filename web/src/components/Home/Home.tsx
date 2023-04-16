import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

import HomeHeader from "./Header"
import GithubExtension from "./GithubExtension"


export const Home = (props: any) => {

    return (
        <div id="home">
            <HomeHeader />
            <div className="py-1"></div>
            <GithubExtension {...props}/>
        </div>
    )
}

export default Home;