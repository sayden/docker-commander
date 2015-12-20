import React from 'react';

const Card = require('material-ui/lib/card/card');
const Avatar = require('material-ui/lib/avatar');
const CardHeader = require('material-ui/lib/card/card-header');
const TableRow = require('material-ui/lib/table/table-row');
const TableRowColumn = require('material-ui/lib/table/table-row-column');
const Table = require('material-ui/lib/table/table');
const TableHeader = require('material-ui/lib/table/table-header');
const TableHeaderColumn = require('material-ui/lib/table/table-header-column');
const TableBody = require('material-ui/lib/table/table-body');
const FontIcon = require('material-ui/lib/font-icon');
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Agent extends React.Component {
  render(){
    return (
      <Card style={this.props.style} initiallyExpanded={false}>
        <CardHeader
          title={"Agent " + this.props.agent.IP}
          subtitle="Information about containers and images"
          avatar={<Avatar src="img/docker.png"></Avatar>}
          actAsExpander={true}
          showExpandableButton={true}
        />

        <Table
          height='200px'
          fixedHeader={false}
          fixedFooter={false}
          selectable={false}
          multiSelectable={false}
          expandable={true}
          >
          <TableHeader enableSelectAll={false} displaySelectAll={false} >
            <TableRow>
              <TableHeaderColumn tooltip='The Driver'>Driver</TableHeaderColumn>
              <TableHeaderColumn tooltip='The Status'>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            deselectOnClickaway={false}
            showRowHover={true}
            displayRowCheckbox={false}
            >

          </TableBody>
        </Table>
      </Card>
  );
  }
}

export default Agent
