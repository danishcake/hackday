import React, { Component } from 'react';
import './App.css';
import { Map } from './components/Map';
import { SearchBar } from './components/SearchBar';
import { DetailsPane } from  './components/DetailsPane';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter_text: ""
    };
  }

  render() {
    return (
      <div>
        <div class="mapArea">
          <div class="searchArea">
            <SearchBar/>
          </div>
          <Map/>
        </div>
        <div class="detailsArea">
          <DetailsPane/>
        </div>
      </div>
    );
  }
}

export default App;
