import React, { Component } from 'react';
import './App.css';
import 'react-md/dist/react-md.blue_grey-amber.min.css'
import 'material-icons/iconfont/MaterialIcons-Regular.woff2'
import 'material-icons/iconfont/material-icons.css'
import {SearchBar} from './components/SearchBar';
import {DetailsPane} from  './components/DetailsPane';
import {Reports} from './data/Reports';
import {FilterData} from './data/Filter';
import {ReportDialog} from "./components/ReportDialog/index";
import { MapView } from './components/Map/map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
      reports: Reports,
      filteredReports: Reports,
      selectedReport: null
    };
  }

  filterChange(value, event) {
    const filteredReports = FilterData(this.state.reports, value, null);

    this.setState({
      filterText: value,
      filteredReports: filteredReports
    });
  }

  showReport = (report) => {
    this.setState({
      selectedReport: report
    });
  };

  hideReport = (reportToSave) => {
    // TODO: If reportToSave set, replace selected report with the edited version

    this.setState({
      selectedReport: null
    });
  };

  render() {
    return (
      <div>
        <div className="mapArea">
          <div className="searchArea">
            <SearchBar value={this.state.filterText} onChange={(value, event) => this.filterChange(value, event)}/>
          </div>
          <div className="mapViewArea">
            <MapView className="mapView"/>
          </div>
        </div>
        <div className="detailsArea">
          <DetailsPane reports={this.state.filteredReports} showReport={this.showReport}/>
        </div>
        <ReportDialog report={this.state.selectedReport} onHide={this.hideReport}/>
      </div>
    );
  }
}

export default App;
