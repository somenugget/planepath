import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { logIn } from '../actions/user';

const mapStateToProps = state => ({
  tryingToLogIn: state.user.tryingToLogIn,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (username, password) => {
    dispatch(logIn(username, password, ownProps.history));
  },
});

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default Login;
