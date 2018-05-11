import React, { Component } from 'react';
import './App.css';
import 'react-md/dist/react-md.blue_grey-amber.min.css'
import {Map} from './components/Map';
import {SearchBar} from './components/SearchBar';
import {DetailsPane} from  './components/DetailsPane';
import {Reports} from './data/Reports';
import {FilterData} from './data/Filter';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
      reports: Reports,
      filteredReports: Reports
    };
  }

  filterChange(value, event) {
    const filteredReports = FilterData(this.state.reports, value, null);

    this.setState({
      ...this.state,
      filterText: value,
      filteredReports: filteredReports
    });
  }


  render() {
    return (
      <div>
        <div className="mapArea">
          <div className="searchArea">
            <SearchBar value={this.state.filterText} onChange={(value, event) => this.filterChange(value, event)}/>
          </div>
          <Map/>
        </div>
        <div className="detailsArea">
          <DetailsPane reports={this.state.filteredReports}/>
        </div>
      </div>
    );
  }
}

export default App;
