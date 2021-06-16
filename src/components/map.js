import {Button} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const Map = props => {
  return (
    <Card>
      <Card.Img className='map-image'varient='top' src={props.style.style_object.map_url}></Card.Img>
      <Card.Body>
        <Card.Title>{props.style.name}</Card.Title>
        {/* <Card.Text>Test</Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
        <Button variant="danger" onClick={()=> props.deleteMap(props.style.style_id)}>Delete Map</Button>
      </Card.Body>
      
    </Card>
  )
}

export default Map