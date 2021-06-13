import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    map_url: ''
  }

  componentDidMount() {
    // debugger
    this.setMapUrl()
  }
  
  setMapUrl() {
    fetch('http://localhost:3000/get_map')
    .then(result => result.json())
    .then(result => this.setState(
      {
        map_url: result
      }
    ))
  }

  handleClick() {
    fetch('http://localhost:3000/rcm')
    .then(resp => this.setMapUrl())
  }


  render() {
    return (
      <div className="App">
        <h1>Get new map
        </h1>
        <button onClick={this.handleClick}>Get map</button>
        <br></br>
        <img src={this.state.map_url}></img>
      </div>
    );
  }
  
}

export default App;
