import React from 'react';
import { connect } from 'react-redux';

import NotAllowed from '../pages/NotAllowed';

const Authorization = (WrappedComponent, allowedRoles) => {
  class WithAuthorization extends React.Component {
    constructor(props) {
      super(props);
      this.isAllowed = this.isAllowed.bind(this);
    }

    isAllowed() {
      if (!this.props.user) {
        return false;
      }

      return allowedRoles.includes(this.props.user.role);
    }

    render() {
      if (this.isAllowed()) {
        return <WrappedComponent {...this.props} />;
      }

      return <NotAllowed />;
    }
  }

  const mapStateToProps = state => ({
    user: state.user.user,
  });

  return connect(mapStateToProps)(WithAuthorization);
};

export default Authorization;
