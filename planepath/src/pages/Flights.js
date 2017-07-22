import React from 'react';
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
        <FlightsList flights={this.props.flights.items} />
      </div>
    );
  }

  render() {
    return (
      <Grid container>
        {(this.props.flights.isFetching) ? <Loading /> : this.renderFlights()}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  flights: state.flights,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadFlights: () => dispatch(loadFlights(ownProps.user.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Flights);
