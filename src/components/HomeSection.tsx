import { Col, Container, Row } from "react-bootstrap";

import '../assets/css/home.css';
import LanguageSection from "./LanguageSection";


export const HomeSection = () => {

    return (
        <Container className='' style={{
            width: '100vw', minWidth: '100vw', height: '80vh', 
            backgroundColor:'rgb(36, 36, 36)'
            }}>
            
            <Row>
                <Col>
                </Col>

                <Col>
                   <LanguageSection />
                </Col>
            </Row>


        </Container>
    )

}


export default HomeSection;