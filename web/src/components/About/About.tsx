import { useState, useEffect } from "react"
import { Button, Card, Container } from "react-bootstrap"
import useIsMobile from "../../helpers/hooks/useIsMobile"
import GradientText from "../../helpers/utils/GradientText"



export const About = () => {
    
    const {isMobile, isNotMobile} = useIsMobile()
    const [bodyFontSize, setBodyFontSize] = useState(12)

    useEffect(() => {
        setBodyFontSize(isMobile ? 12 : 16)
    }, [])

    return (
        <>
        
            <Container id='about' className='my-5'>
                <Card className='bg-dark text-white'>
                    <Card.Header>
                        {isMobile && <GradientText text='About Me' fontSize={18} x={37.5} y={65} height={2}/>}
                        {isNotMobile && <GradientText text='About Me' fontSize={28} x={45} y={70} height={3}/>}      
                    </Card.Header>

                    <Card.Body style={{fontSize:`${bodyFontSize}px`}}> 
                    
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
        </>
    )
    

}



export default About