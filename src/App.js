import React, { Component } from 'react';
import './App.css';
import Cities from './components/Cities';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import axios from 'axios';

class App extends Component {
  state = {
    cities: []
  };

  componentDidMount() {
    axios
      .get(
        'http://api.openweathermap.org/data/2.5/group?id=2147714,2073124,2172517,2158177,2174003,2078025,2063523,2163355&units=metric&appid=051af6f04624d7bd3ae0749a80d01cb7'
      )
      .then(res => this.setState({ cities: res.data.list }));
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Cities cities={this.state.cities} />
        <Footer />
      </div>
    );
  }
}

export default App;
