import { useEffect, useState } from "react";
import { Button, Form, FormGroup, FormLabel, FormText, Tab, Tabs } from "react-bootstrap";
import DashboardSidebar from "../components/Navbars/DashboardSidebar";
import userManager from "../helpers/api/UserManager";


export const Dashboard = () => {

    // Set Projects Displayed on HomePage

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // useEffect(() => {
    //     if (userManager.hasToken())
    //         userManager.validateToken()
    // }, [userManager])


    const [exampleProjects, setExampleProjects] = useState(Array<object>())

    const login = (e: any) => {
        e.preventdefault()

        userManager.login(email, password)
    }

    const register = (e:any) => {

    }

    return (
        <>
        {/* Authentication Required */}
        {!userManager.hasToken() || userManager.validToken && 
            <Tabs
                defaultActiveKey="login"
                id="auth-tabs"
                className="mb-3"
            >
                <Tab eventKey="login" title="Login">
                    <Form id='login' onSubmit={(e) => login(e)}>
                        <FormGroup>
                            <FormLabel>Email</FormLabel>
                            <FormText/>
                            <FormLabel>Password</FormLabel>
                            <FormText />
                            <Button>Login</Button>
                        </FormGroup>
                    </Form>
                </Tab>
                <Tab eventKey="register" title="Register">
                    <Form id='register' onSubmit={(e) => register(e)}>
                        <FormGroup>
                            <FormLabel>Email</FormLabel>
                            <FormText/>
                            <FormLabel>Password</FormLabel>
                            <FormText />
                            <FormLabel>Admin Secret Key</FormLabel>
                            <FormText />
                            <Button>Register</Button>
                        </FormGroup>
                    </Form>
                </Tab>
            </Tabs>
        }

        {/* Authenticated */}
        {userManager.hasToken() && userManager.validToken &&
            <DashboardSidebar />
        
        }

        </>
    )
}


export default Dashboard;