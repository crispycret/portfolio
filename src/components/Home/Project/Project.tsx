import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import useIsMobile from "../../../helpers/hooks/useIsMobile"



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
}


export default Project