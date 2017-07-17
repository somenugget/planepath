import { connect } from 'react-redux';
import Menu from '../components/Menu';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = () => ({});

const Navigation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);

export default Navigation;
