import React from 'react';
import { Grid } from 'semantic-ui-react';

import PathInputRow from '../components/PathInputRow';
import SearchHeader from '../containers/SearchHeader';
import TripsTable from '../containers/TripsTable';

class Trips extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <SearchHeader />
          </Grid.Column>
        </Grid.Row>

        <PathInputRow />

        <Grid.Row>
          <Grid.Column>
            <TripsTable />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Trips;
