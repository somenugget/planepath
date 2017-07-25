import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Grid, Divider } from 'semantic-ui-react';
import Loading from './Loading';
import { loadFlights } from '../actions/flights';
import FlightsList from '../components/FlightsList';
import FlightsCreation from '../containers/FlightsCreation';

class Flights extends React.Component {
  constructor(props) {
    super(props);
    this.renderFlights = this.renderFlights.bind(this);
  }

  componentWillMount() {
    this.props.loadFlights();
  }

  renderFlights() {
    return (
      <div className="ui column">
        <FlightsCreation />
        <Divider />
        <FlightsList flights={this.props.flights} />
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
  flights: state.flights.items.map(flight => ({
    ...flight,
    from: _.find(state.cities.items, { id: flight.from_id }),
    to: _.find(state.cities.items, { id: flight.to_id }),
  })),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadFlights: () => dispatch(loadFlights(ownProps.user.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Flights);
