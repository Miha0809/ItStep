import React, { Component } from 'react';
import './App.css';
import Preloader from './components/Preloader';
import Header from './components/Header';
import FirstScreen from './components/FirstScreen';
import Portfolio from './components/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      let preloader = document.getElementsByClassName('holder')[0];
      preloader.style.opacity = 0;
      preloader.style.visibility = 'hidden';
      document.body.style.overflow = 'auto';
    }, 1000);
  }

  componentDidMount() {}
  state = {
    links: {
      link1: 1
    }
  };
  render() {
    return (
      <React.Fragment>
        <Preloader />
        <Header />
        <FirstScreen />
        <Portfolio />
      </React.Fragment>
    );
  }
}

export default App;