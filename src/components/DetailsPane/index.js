import React from 'react'
import {Paper, List, ListItem, Subheader} from 'react-md';
import {formatLatitude, formatLongitude} from 'latlon-formatter';

export class DetailsPane extends React.Component {
  constructor(props) {
    super(props)
  }

  renderItems(reports) {
    return reports.map(report => {
      const lat = formatLatitude(report.location.latitude, {degrees: true});
      const lon = formatLongitude(report.location.longitude, {degrees: true});

      return <ListItem primaryText={report.title}
                       secondaryText={`${lat} ${lon}`}/>;
    });
  }

  render() {
    const props = this.props;

    return <div>
      <Paper zdepth={1} className="fillParent">
        <List>
          <Subheader primaryText="Reports"/>
          {this.renderItems(props.reports)}
        </List>
      </Paper>
    </div>
  }
}
