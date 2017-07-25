import { connect } from 'react-redux';
import { createFlight } from '../actions/flights';
import FlightsCreationForm from '../components/FlightsCreationForm';

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

  return {
    cities: state.cities.items.map(item => ({ id: item.id, title: item.title })),
    user: state.user.user,
    errors,
  };
};

const mapDispatchToProps = () => ({
  onSubmit: (values, dispatch, props) => {
    dispatch(createFlight({
      ...values,
      to_id: values.to,
      from_id: values.from,
      code: values.code,
      departure: values.departure,
      duration: values.duration,
      cost: values.cost,
      active: values.active,
      token: props.user.token,
    }));
  },
});

const FlightsCreation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlightsCreationForm);

export default FlightsCreation;
