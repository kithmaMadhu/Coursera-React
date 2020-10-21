import React, { Component } from 'react';
import Main from './components/MainComponent';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './App.css';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
  return (
    <BrowserRouter>
      <div>
      <Main />
      </div>
    </BrowserRouter>
  );
  }
}

export default App;