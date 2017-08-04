import { connect } from 'react-redux';
import TripsList from '../components/TripsList';

const mapStateToProps = state => ({
  trips: state.trips.items,
  cities: state.cities.items,
});

const Trips = connect(
  mapStateToProps,
)(TripsList);

export default Trips;
