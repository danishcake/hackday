import React from 'react'
import {DialogContainer, Toolbar, Button, Grid, Cell, Paper} from 'react-md';
import {formatLatitude, formatLongitude} from 'latlon-formatter';

export class ReportDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      report: null
    }
  }

  onShow = (report) => {
    this.setState({report});
  };

  renderChildReports = (report) => {
    return report.reports.map(childReport => {
      return <Grid>
        <Cell offset={1} size={10}>{childReport.reportDetails}</Cell>
      </Grid>
    });
  };

  renderDetails = (report) => {
    return Object.entries(report.details).map(([key, value]) => {
      return <Grid>
        <Cell offset={1} size={2}>{key}</Cell>
        <Cell size={8}>{value}</Cell>
      </Grid>
    });
  };

  render() {
    if (this.props.report == null) {
      return null;
    } else {
      const report = this.state.report || this.props.report;
      const lat = formatLatitude(report.location.lat, {degrees: true});
      const lon = formatLongitude(report.location.long, {degrees: true});

      return <DialogContainer visible={this.props.report !== null}
                              id="reportDialog"
                              fullPage
                              onHide={this.props.onHide}
                              onShow={() => this.onShow(this.props.report)}>
        <Toolbar fixed
                 colored
                 title="Report details"
                 nav={<Button icon onClick={() => this.props.onHide(null)}>close</Button>}
                 actions={<Button flat onClick={() => this.props.onHide(report)}>Save</Button>}
        />
        <Paper className="fillParent md-toolbar-relative" zDepth={1}>
          <Grid>
            <Cell size={2} offset={1}>Title</Cell>
            <Cell size={8}>{report.title}</Cell>
          </Grid>
          <Grid>
            <Cell size={2} offset={1}>Location</Cell>
            <Cell size={8}>{lat} {lon}</Cell>
          </Grid>
          {this.renderChildReports(report)}
          {this.renderDetails(report)}
        </Paper>
      </DialogContainer>
    }
  }
}
