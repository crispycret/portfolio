import { useState } from "react";
import DashboardSidebar from "../components/Navbars/DashboardSidebar";


type ExampleProject = {
    name: string,           // project name / title
    summary: string,        // project summary
    version: string,        // project version
    status: string,         // production / developmet / testing
    githubUrl: string,      // code source
    websiteUrl: string,     // live source
    imageUrl: string,       // project thumbnail source
    created: Date,        // project creation date
    updated: Date,        // project updated date
}

export const Dashboard = () => {

    // Set Projects Displayed on HomePage


    const [exampleProjects, setExampleProjects] = useState(Array<object>())

    return (
        <>

        <DashboardSidebar />
        


        </>
    )
}


export default Dashboard;