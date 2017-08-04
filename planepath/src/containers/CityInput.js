import { connect } from 'react-redux';
import { setCityAndFindTrips } from '../actions/city';
import CityInput from '../components/CityInput';

const mapStateToProps = state => ({
  loading: state.cities.isFetching,
  results: state.cities.items.map(item => ({ id: item.id, title: item.title })),
});

const mapDispatchToProps = (dispatch, props) => ({
  onResultSelect: (event, data) => {
    dispatch(setCityAndFindTrips(props.direction, data.result));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CityInput);
