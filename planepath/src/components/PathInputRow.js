import React from 'react';
import { Grid } from 'semantic-ui-react';
import CityInput from '../containers/CityInput';

const PathInputRow = () => (
  <Grid.Row>
    <Grid.Column width={4}>
      <CityInput direction="from" />
    </Grid.Column>
    <Grid.Column width={4}>
      <CityInput direction="to" />
    </Grid.Column>
  </Grid.Row>
);

export default PathInputRow;
