import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Details from './pages/details/details'


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/details' component={Details}/>
      </Switch>      
    );
  }
}

export default App;
