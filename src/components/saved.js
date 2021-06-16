import React, {Component} from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Map from './map'
class Saved extends Component {


  render() {
    console.log(this.props.all_styles)
    return (

      <div className='custom-card-deck'>
        <h1>Saved Maps</h1>
        <h4>Total: {this.props.all_styles.length}</h4>
        <CardDeck style={{width: '80rem' },{marginLeft: '5%'}}>
          {this.props.all_styles.map(style => <Map style={style} deleteMap={this.props.deleteMap} key={style.style_id}></Map>)}
          {/* {this.props.all_styles.map(style => <h1>test</h1>)} */}
          
        </CardDeck>
      </div>
    )
  }

}

export default Saved