import { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, FormLabel, FormText, Modal, Tab, Tabs } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import Auth from "../components/Dashboard/core/Auth";
import ProjectManager from "../components/Dashboard/ProjectManager/ProjectManager";
import Sidebar from "../components/Dashboard/core/Sidebar";
import Content from "../components/Dashboard/core/Content";

import '../assets/css/dashboard.css'
import Home from "../components/Dashboard/core/Home";

export const Dashboard = (props: any) => {

    // Set Projects Displayed on HomePage
    const [sidebarToggled, setsidebarToggled] = useState(false)

    const [showAuth, setShowAuth] = useState(true)

    const hasValidToken = () => {
        return props.apis.portfolio.userManager.hasValidToken()
    }

    useEffect(() => {
        if (hasValidToken()){
            setShowAuth(false)
        } else{
            setShowAuth(true)
        }
    }, [props.apis.portfolio.userManager.validToken])


    const handleHide = () => {
        // Do nothing; The only way to hide is to leave page or authenticate
    }

    const onAuthSuccess = () => {
        // Feed to Dashboard Auth for login if nesseccary
    }
 

    return (
        <>
            {/* Authentication Required */}
            {!hasValidToken() &&
                <Modal show={showAuth} onHide={handleHide}>
                    <Modal.Body>
                        <Dashboard.Auth {...props}/>
                    </Modal.Body>
                </Modal>
            }

            {/* Authenticated */}
            {hasValidToken() &&
            <>
                <Dashboard.Sidebar {...props} sidebarToggled={sidebarToggled} setsidebarToggled={setsidebarToggled} />
                <Dashboard.Content props={{...props, sidebarToggled}}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="/projects" element={<Dashboard.ProjectManager {...props}/>} />
                    </Routes>
                </Dashboard.Content>
            </> 
            }
        </>
    )
}

Dashboard.Auth = Auth;
Dashboard.Sidebar = Sidebar;
Dashboard.ProjectManager = ProjectManager;
Dashboard.Content = Content;


export default Dashboard;