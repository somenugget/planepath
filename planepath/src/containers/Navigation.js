import { connect } from 'react-redux';
import MainMenu from '../components/MainMenu';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = () => ({});

const Navigation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainMenu);

export default Navigation;
