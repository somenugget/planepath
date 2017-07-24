export const validate = (values) => {
  const errors = {};

  if (!values.from) {
    errors.from = 'Arrival point is required';
  }

  if (!values.to) {
    errors.to = 'Departure point is required';
  }

  if (values.from && values.to && values.from === values.to) {
    errors.to = 'The point of arrival must be different from the point of departure';
  }

  if (!values.code) {
    errors.code = 'Code is required';
  }

  if (!values.departure) {
    errors.departure = 'Departure is required';
  }

  if (!values.duration) {
    errors.duration = 'Duration is required';
  }

  if (parseInt(values.duration, 10) <= 0) {
    errors.duration = 'Duration must be positive';
  }

  if (!values.cost) {
    errors.cost = 'Cost is required';
  }

  if (parseInt(values.cost, 10) <= 0) {
    errors.cost = 'Cost must be positive';
  }

  return errors;
};
