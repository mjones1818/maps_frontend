import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    style: {},
    map_url: ''
  }

  componentDidMount() {
    // debugger
    this.setMapUrl()
    // this.getColors()
  }

  componentDidUpdate() {
    // this.getColors()
  }
  
  getColors() {
    fetch('http://localhost:3000/get_colors')
  }
  setMapUrl() {
    fetch('http://localhost:3000/get_map')
    .then(result => result.json())
    .then(result => this.setState(
      {
        ...this.state,
        map_url: result
      }
    ))
  }

  handleClick() {
    fetch('http://localhost:3000/rcm')
    .then(resp => resp.json())
    .then(resp => this.setState(
      {
        style: resp,
        map_url: resp.style_object.map_url
      }
    ))
    .then(resp => console.log(this.state))
  }

  saveMap() {
    fetch(`http://localhost:3000/save_style/${this.state.style.style_id}`)
    .then(resp => resp.json())
    .then(resp => alert('Map Saved'))
  }


  render() {
    return (
      <div className="App">
        <h1>Get new map
        </h1>
        <button onClick={() => this.handleClick()} >Get map</button>
        <button onClick={() => this.saveMap()} >Save map</button>
        <br></br>
        <img 
        src={this.state.map_url} 
        onError={() => this.setState(
          {
            map_url: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
          }
        )} >

        </img>
      </div>
    );
  }
  
}

export default App;
