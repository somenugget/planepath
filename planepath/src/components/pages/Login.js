import React from 'react';
import { Grid } from 'semantic-ui-react';
import LoginContainer from '../../containers/Login';

class Login extends React.Component {
  render() {
    return (
      <Grid container centered columns={2}>
        <Grid.Column>
          <LoginContainer />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
