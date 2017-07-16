import { Search } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setCityAndFindTrips } from '../actions/city';

const mapStateToProps = state => (
  {
    loading: state.cities.isFetching,
    results: state.cities.items,
  }
);

const mapDispatchToProps = (dispatch, props) => (
  {
    onResultSelect: (event, data) => {
      dispatch(setCityAndFindTrips(props.direction, data.result));
    },
  }
);

const CityInput = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default CityInput;
