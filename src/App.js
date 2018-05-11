import React, { Component } from 'react';
import './App.css';
import 'react-md/dist/react-md.blue_grey-amber.min.css'
import { MapView } from './components/Map/map';
import { SearchBar } from './components/SearchBar';
import { DetailsPane } from  './components/DetailsPane';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter_text: ""
    };
  }

  filter_change(value, event) {
    this.setState({...this.state, filter_text: value});
  }

  render() {
    return (
      <div>
        <div className="mapArea">
          <div className="searchArea">
            <SearchBar value={this.state.filter_text} onChange={(value, event) => this.filter_change(value, event)}/>
          </div>
          <div className="mapViewArea">
            <MapView className="mapView"/>
          </div>
        </div>
        <div className="detailsArea">
          <DetailsPane/>
        </div>
      </div>
    );
  }
}

export default App;
