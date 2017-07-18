import React from 'react';
import { Grid } from 'semantic-ui-react';

class GridPage extends React.Component {
  render() {
    return (
      <Grid container>
        {this.props.children}
      </Grid>
    );
  }
}

export default GridPage;
