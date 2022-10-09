import { Card, ListGroup, ListGroupItem } from "react-bootstrap"



export interface ProjectInterface {
    name: string,
    summary: string,
    completed: boolean,
    githubUrl: string,
    websiteUrl: string,
    imageUrl: string,
}


export const Project = (props:ProjectInterface) => {

    return (
        <Card className='bg-dark text-white square border border-success mt-5'>
            <Card.Img src={props.imageUrl} alt="IMAGE GOES HERE"></Card.Img>
            
            <Card.Header>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.summary}</Card.Text>
            </Card.Header>

            <ListGroup className='bg-dark text-white square border border-success mt-5'>
                <ListGroupItem className='bg-dark text-white square border border-success'>
                    Completed: {props.completed.toString()}
                </ListGroupItem>
            </ListGroup>
            
            <Card.Body>
                <Card.Link>Github</Card.Link>
                <Card.Link>Website</Card.Link>
            </Card.Body>
        </Card>
    )



{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */}
}



export default Project