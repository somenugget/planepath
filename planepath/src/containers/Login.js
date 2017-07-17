import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { logIn } from '../actions/user';

const mapStateToProps = state => ({
  tryingToLogIn: state.user.tryingToLogIn,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => {
    console.log(username, password);
    dispatch(logIn(username, password));
  },
});

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default Login;
