import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from '../actions/user';

class LogoutPage extends React.Component {
  componentWillMount() {
    this.props.logOut();
    this.props.history.push('/');
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
});

export default connect(() => ({}), mapDispatchToProps)(withRouter(LogoutPage));
