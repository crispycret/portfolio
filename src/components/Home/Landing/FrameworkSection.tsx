import { Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"


export const FrameworkSection = () => {

    const frameworks = [
        ['Flask', 'Novice'], ['ReactJS', 'Novice']
    ]

    const frameworkTags:any = []

    frameworks.map((_,i) => {
        frameworkTags.push(
            <ListGroupItem className="bg-dark text-white">
                <Row>
                    <Col className='col-6'>{_[0]}</Col>
                    <Col className='col-6'>{_[1]}</Col>
                </Row>
            </ListGroupItem>
        )
    })

    return (
        <Card className="bg-dark text-white square border border-success mt-5">
            <Card.Header >FRAMEWORKS</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    {frameworkTags}
                </ListGroup>
            </Card.Body>
        </Card>

    )
}



export default FrameworkSection;

