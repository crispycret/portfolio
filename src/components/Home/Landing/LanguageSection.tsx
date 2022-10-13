import { Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"


export const LanguageSection = () => {

    const languages = [
        ['Python', 'Advanced'], ['Java', 'Novice'], 
        ['Javascript', 'Novice'], ['Typescript', 'Novice'], 
        ['C#', 'Novice']
    ]

    let languageTags: any[] = []


    languages.map((_, i) => {
        languageTags.push(
        <ListGroupItem className="bg-dark text-white">
            <Row>
                <Col className='col-6'>{_[0]}</Col>
                <Col className='col-6'>{_[1]}</Col>
            </Row>
        </ListGroupItem>)
    }) 

    return (
        <Card className="bg-dark text-white square border border-warning mt-5">
    
            <Card.Header>LANGUAGES</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    {languageTags}
                </ListGroup>
            </Card.Body>
        </Card>

    )
}



export default LanguageSection;

