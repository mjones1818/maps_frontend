
import './App.css';
import { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapContainer from './containers/maps'


class App extends Component {

  render() {
    return (
      <div className='App'>
        <MapContainer></MapContainer>
      </div>
    )
  }
}

export default App;
