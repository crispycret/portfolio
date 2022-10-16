import { Button, Card, Container } from "react-bootstrap"
import useIsMobile from "../../helpers/hooks/useIsMobile"



export const About = () => {
    const [isMobile, isNotMobile] = useIsMobile()
    return (
        <>
            { isNotMobile &&
                <Container id='about' className='my-3'>
                    <Card className='bg-dark text-white'>
                        <Card.Header>About Brandon Nadeau</Card.Header>
                        <Card.Body style={{fontSize:'12px'}}>
                            <Card.Text>
                                <p>
                                    Brandon has been a programming enthusiast since his freshman year of highschool. 
                                </p>
                                <p>
                                    He has explored game engines like Unity, Web frameworks like ReactJS, Python’s Flask and Django. 
                                </p>
                                <p>
                                    He has an understanding of web scraping, backend API, frontend developments, databases, networking and more. 
                                </p>
                                <p>
                                    Contact him to find out more.
                                </p>
                            </Card.Text>
                            <Button style={{fontSize:'12px'}} onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Contact</Button>
                        </Card.Body>
                    </Card>
                </Container>
            }

            { isMobile &&
                <Container id='about' className='my-3'>
                    <Card className='bg-dark text-white'>
                        <Card.Header>About Brandon Nadeau</Card.Header>
                        <Card.Body style={{fontSize:'12px'}}>
                            <Card.Text>
                                <p>
                                    Brandon has been a programming enthusiast since his freshman year of highschool. 
                                </p>
                                <p>
                                    He has explored game engines like Unity, Web frameworks like ReactJS, Python’s Flask and Django. 
                                </p>
                                <p>
                                    He has an understanding of web scraping, backend API, frontend developments, databases, networking and more. 
                                </p>
                                <p>
                                    Contact him to find out more.
                                </p>
                            </Card.Text>
                            <Button style={{fontSize:'12px'}} onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Contact</Button>
                        </Card.Body>
                    </Card>
                </Container>
            }
        </>
    )
    

}



export default About