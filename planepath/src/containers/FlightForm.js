import _ from 'lodash';
import { connect } from 'react-redux';
import { createFlight, unsetUpdatingFlight, updateFlight } from '../actions/flights';
import FlightForm from '../components/FlightForm';

const mapStateToProps = (state) => {
  const errors = {};
  if (state.form.flight && state.form.flight.syncErrors && state.form.flight.fields) {
    const { syncErrors, fields } = state.form.flight;
    Object.keys(syncErrors).forEach((key) => {
      if (fields[key] && fields[key].touched) {
        errors[key] = syncErrors[key];
      }
    });
  }

  let initialValues = {};
  if (state.flights.updatingFlight) {
    initialValues = _.find(state.flights.items, { id: state.flights.updatingFlight });
    initialValues.from = initialValues.from_id;
    initialValues.to = initialValues.to_id;
  }

  return {
    cities: state.cities.items.map(item => ({ id: item.id, title: item.title })),
    user: state.user.user,
    initialValues,
    updatingFlight: state.flights.updatingFlight,
    errors,
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (values, formDispatch, props) => {
    const sentValues = {
      ...values,
      to_id: values.to,
      from_id: values.from,
      code: values.code,
      departure: values.departure,
      duration: values.duration,
      cost: values.cost,
      active: values.active,
      token: props.user.token,
    };

    if (props.updatingFlight) {
      formDispatch(updateFlight(props.updatingFlight, sentValues));
    } else {
      formDispatch(createFlight(sentValues));
    }
  },
  unsetUpdatingFlight: () => dispatch(unsetUpdatingFlight()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlightForm);
