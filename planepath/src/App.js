import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import CityInput from './containers/CityInput';
import SearchHeader from './containers/SearchHeader';
import Trips from './containers/Trips';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Grid container>
          <Grid.Row>
            <Grid.Column>
              <SearchHeader />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <CityInput direction="from" />
            </Grid.Column>
            <Grid.Column>
              <CityInput direction="to" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Trips />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
