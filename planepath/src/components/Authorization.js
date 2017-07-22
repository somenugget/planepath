import React from 'react';
import { connect } from 'react-redux';

import NotAllowed from '../pages/NotAllowed';
import Loading from '../pages/Loading';
import { checkAccess, accessDenied } from '../actions/access';

const Authorization = (WrappedComponent, allowedRoles) => {
  class WithAuthorization extends React.Component {
    componentWillMount() {
      if (this.props.user) {
        this.props.checkAccess(this.props.user.token, this.props.user.role);
      } else {
        this.props.accessDenied();
      }
    }

    render() {
      if (this.props.access.tryingToCheckAccess) {
        return <Loading />;
      }

      if (this.props.access.accessAllowed && allowedRoles.includes(this.props.user.role)) {
        return <WrappedComponent {...this.props} />;
      }

      return <NotAllowed />;
    }
  }

  const mapStateToProps = state => ({
    user: state.user.user,
    access: state.access,
  });

  const mapDispatchToProps = dispatch => ({
    checkAccess: (token, role) => dispatch(checkAccess(token, role)),
    accessDenied: () => dispatch(accessDenied()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthorization);
};

export default Authorization;
