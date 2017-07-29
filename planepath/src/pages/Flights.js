import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Grid, Divider } from 'semantic-ui-react';
import Loading from './Loading';
import { loadFlights,
         updateFlight,
         setUpdatingFlight,
         setRemovingFlight,
         removeFlight,
         unsetRemovingFlight } from '../actions/flights';
import FlightsList from '../components/FlightsList';
import FlightForm from '../containers/FlightForm';

class Flights extends React.Component {
  constructor(props) {
    super(props);
    this.renderFlights = this.renderFlights.bind(this);
  }

  componentWillMount() {
    if (!this.props.isFetching) {
      this.props.loadFlights();
    }
  }

  renderFlights() {
    return (
      <div className="ui column">
        <FlightForm />
        <Divider />
        <FlightsList
          flights={this.props.flights}
          removingFlight={this.props.removingFlight}
          updateFlight={this.props.updateFlight}
          setUpdatingFlight={this.props.setUpdatingFlight}
          setRemovingFlight={this.props.setRemovingFlight}
          unsetRemovingFlight={this.props.unsetRemovingFlight}
          removeFlight={this.props.removeFlight}
        />
      </div>
    );
  }

  render() {
    return (
      <Grid container>
        {(this.props.isFetching) ? <Loading /> : this.renderFlights()}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.flights.isFetching,
  removingFlight: state.flights.removingFlight,
  flights: state.flights.items.map(flight => ({
    ...flight,
    from: _.find(state.cities.items, { id: flight.from_id }),
    to: _.find(state.cities.items, { id: flight.to_id }),
  })),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadFlights: () => dispatch(loadFlights(ownProps.user)),
  updateFlight: (flightId, values) => {
    dispatch(updateFlight(flightId, { ...values, token: ownProps.user.token }));
  },
  setUpdatingFlight: flightId => dispatch(setUpdatingFlight(flightId)),
  setRemovingFlight: flightId => dispatch(setRemovingFlight(flightId)),
  unsetRemovingFlight: () => dispatch(unsetRemovingFlight()),
  removeFlight: flightId => dispatch(removeFlight(flightId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Flights);
