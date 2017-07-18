import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import LoginContainer from '../containers/Login';

class Login extends React.Component {
  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <Grid container centered columns={2}>
        <Grid.Column>
          <LoginContainer history={this.props.history} />
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, () => ({}))(withRouter(Login));
