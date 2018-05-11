import React from 'react'
import {Paper, List, ListItem, Subheader} from 'react-md';

export class DetailsPane extends React.Component {
  constructor(props) {
    super(props)
  }

  renderItems(reports) {
    return reports.map(report => <ListItem primaryText={report.title}
                                           secondaryText={`${report.location.latitude} ${report.location.longitude}`}/>);
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
