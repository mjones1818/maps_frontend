import React, {Component} from 'react'
import Saved from '../components/saved'
import NewMap from '../components/newMap'
class MapContainer extends Component {
  state = {
    style: {},
    map_url: '',
    all_styles: {}
  }

  componentDidMount() {
    this.setMapUrl()
    this.getAllStyles()
  }

  componentDidUpdate() {
    // this.getColors()
  }
  
  getAllStyles = () => {
    fetch('http://localhost:3000/styles')
    .then(resp => resp.json())
    .then(resp => this.setState(
      {
        all_styles: resp
      }
    ))
    .then(resp => console.log('get all styles'))
  }

  getColors() {
    fetch('http://localhost:3000/get_colors')
  }

  setMapUrl = () => {
    console.log('setMapUrl')
    fetch('http://localhost:3000/get_map')
    .then(result => result.json())
    // .then(resp => console.log(resp, this.state))
    // .then(result => this.getAllStyles)
    .then(resp => this.setState(
      {
        map_url: resp.style_object.map_url
      }
    ))
  }

  getMap = () => {
    fetch('http://localhost:3000/rcm')
    .then(resp => resp.json())
    .then(resp => this.setState(
      {
        ...this.state,
        style: resp,
        map_url: resp.style_object.map_url
      }
    ))
    .then(resp => console.log('get map'))
    .then(resp => this.getColors())
    
  }

  saveMap = () => {
    fetch(`http://localhost:3000/save_style/${this.state.style.style_id}`)
    .then(resp => resp.json())
    .then(resp => this.getAllStyles())
    .then(resp => alert('map saved'))
  }

  mapError = (e) => {
    console.log('error',e)
    e.target.src='https://www.computerhope.com/jargon/e/error.png'
    // e.target.src=this.state.mapUrl
    
    // this.setState(
    //   {
    //     map_url: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
    //     // map_url: this.state.mapUrl
    //   }
    // )
  }

  deleteMap = (style_id) => {
    fetch(`http://localhost:3000/styles/${style_id}`,{
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => alert(`${resp.name} has been deleted`))
    .then(resp => this.getAllStyles())
  }

  render () {
    return (
      <div className='map-container'>
        <NewMap 
          mapUrl={this.state.map_url} 
          getMap={this.getMap}
          saveMap={this.saveMap}
          mapError={this.mapError}
        ></NewMap>
        {this.state.all_styles.length > 0 ? <Saved all_styles={this.state.all_styles} deleteMap={this.deleteMap}></Saved> : ''}
      </div>
    )
  }
}

export default MapContainer