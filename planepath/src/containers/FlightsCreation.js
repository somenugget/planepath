import { connect } from 'react-redux';
import { createFlight } from '../actions/flights';
import FlightsCreationForm from '../components/FlightsCreationForm';

const mapStateToProps = state => ({
  cities: state.cities.items.map(item => ({ id: item.id, title: item.title })),
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (token, fromId, toId, code, departure, duration, cost) => {
    dispatch(createFlight(token, fromId, toId, code, departure, duration, cost));
  },
});

const FlightsCreation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlightsCreationForm);

export default FlightsCreation;
