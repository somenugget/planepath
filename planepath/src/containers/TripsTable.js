import { connect } from 'react-redux';
import TripsList from '../components/TripsList';

const mapStateToProps = state => (
  {
    trips: state.trips.items,
  }
);

const mapDispatchToProps = () => ({});

const Trips = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TripsList);

export default Trips;
