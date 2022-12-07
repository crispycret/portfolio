import { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, FormLabel, FormText, Modal, Tab, Tabs } from "react-bootstrap";


export const DashboardAuth = (props: any) => {

    const topNav = document.getElementById('top-nav')?.clientHeight || '56'

    const Spacer = ({size=1}:any) => <div className={`my-${size}`} />
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [secretKey, setSecretKey] = useState("")
    const [exampleProjects, setExampleProjects] = useState(Array<object>())

    
    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.apis.portfolio.userManager.login(email, password)
    }

    const register = (e:any) => {
        e.preventDefault()
        props.apis.portfolio.userManager.register(email, password, secretKey)
    }    
    
    return (
    <>
        
        <Tabs
            defaultActiveKey="login"
            id="auth-tabs"
            className="mb-3"
        >
            <Tab eventKey="login" title="Login">
                <Form id='login' onSubmit={(e) => login(e)}>
                    <FormGroup>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={e => setEmail(e.currentTarget.value)}/>
                        <Spacer />
                        <FormLabel>Password</FormLabel>
                        <Form.Control type="password" placeholder="Password"  value={password} onChange={e => setPassword(e.currentTarget.value)}/>
                        <Spacer />
                        <Button variant="primary" type="submit">Login</Button>
                    </FormGroup>
                </Form>
            </Tab>
            <Tab eventKey="register" title="Register">
                <Form id='register' onSubmit={(e) => register(e)}>
                    <FormGroup>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={e => setEmail(e.currentTarget.value)}/>
                        <Spacer />
                        <FormLabel>Password</FormLabel>
                        <Form.Control type="password" placeholder="Password"  value={password} onChange={e => setPassword(e.currentTarget.value)}/>
                        <Spacer />
                        <Form.Label>Admin Secret Key</Form.Label>
                        <Form.Control type="password" placeholder="SecretKey"  value={secretKey} onChange={e => setSecretKey(e.currentTarget.value)}/>
                        <Spacer />
                        <Button variant="primary" type="submit">Register</Button>
                    </FormGroup>
                </Form>
            </Tab>
        </Tabs>
    </>
    )

}

export default DashboardAuth;