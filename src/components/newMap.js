import React, {Component} from 'react'

class NewMap extends Component {
  render() {
    return (
      <div>
        <h1>Get new map</h1>
        <button onClick={() => this.props.getMap()} >Get map</button>
        <button onClick={() => this.props.saveMap()} >Save map</button>
        <br></br>
        <img 
        src={this.props.mapUrl}
        alt='map' 
        onError={()=> this.props.mapError()} >
        </img>
      </div>
    )
  }
}

export default NewMap