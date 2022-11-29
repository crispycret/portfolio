import { useEffect, useState } from "react";
import { Button, Form, FormGroup, FormLabel, FormText, Modal, Tab, Tabs } from "react-bootstrap";
import { DashboardAuth } from "../components/Dashboard/DashboardAuth";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";


export const Dashboard = (props: any) => {

    // Set Projects Displayed on HomePage

    const [showAuth, setShowAuth] = useState(true)

    useEffect(() => {
        if (props.userManager.hasToken()){
            props.userManager.validateToken()
            setShowAuth(false)
        }
        else{
            setShowAuth(true)
        }
    }, [props.userManager.user, props.userManager.validToken])


    const handleHide = () => {
        // Do nothing; The only way to hide is to leave page or authenticate
    }

    const onAuthSuccess = () => {
        // Feed to Dashboard Auth for login if nesseccary
    }
 

    return (
        <>
            {/* Authentication Required */}
            {!props.userManager.hasToken() && !props.userManager.validToken && 
                <Modal show={showAuth} onHide={handleHide}>
                    <Modal.Body>
                        <DashboardAuth {...props}/>
                    </Modal.Body>
                </Modal>
            }

            {/* Authenticated */}
            {props.userManager.hasToken() && props.userManager.validToken &&
                <DashboardSidebar />
            }
        </>
    )
}


export default Dashboard;