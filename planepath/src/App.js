import React from 'react';
import { Grid } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import PathInputRow from './components/PathInputRow';
import SearchHeader from './containers/SearchHeader';
import Trips from './containers/Trips';

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Grid container>
          <Grid.Row>
            <Grid.Column>
              <SearchHeader />
            </Grid.Column>
          </Grid.Row>

          <PathInputRow />

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
