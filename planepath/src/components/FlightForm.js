import _ from 'lodash';
import React from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../validations/flight';
import { renderField, renderCheckbox, renderSelect } from './formFields';

const renderFirstError = (errors) => {
  if (!errors) {
    return null;
  }

  const firstErrorKey = Object.keys(errors)[0];

  if (!firstErrorKey) {
    return null;
  }

  return <Message color="red" size="mini" header={`${_.capitalize(firstErrorKey)}: ${errors[firstErrorKey]}`} />;
};

class FlightForm extends React.Component {
  render() {
    const { updatingFlight, unsetUpdatingFlight, cities, handleSubmit, errors } = this.props;

    return (
      <Form onSubmit={handleSubmit} name="flight">
        <h3>
          {updatingFlight ? `Update a flight №${updatingFlight}` : 'Create a new flight'}
        </h3>
        <Form.Group widths="equal">
          <Field
            component={renderSelect}
            required
            id="from"
            name="from"
            label="From"
            results={cities}
          />
          <Field
            component={renderSelect}
            required
            id="to"
            name="to"
            label="To"
            results={cities}
          />
        </Form.Group>
        <Form.Group>
          <Field
            required
            component={renderField}
            id="code"
            name="code"
            width="4"
            label="Code"
          />
          <Field
            required
            component={renderField}
            id="departure"
            name="departure"
            width="4"
            type="time"
            label="Departure"
          />
          <Field
            required
            component={renderField}
            id="duration"
            name="duration"
            width="3"
            min="1"
            type="number"
            label="Duration"
          />
          <Field
            required
            component={renderField}
            id="cost"
            name="cost"
            width="3"
            min="1"
            type="number"
            label="Cost"
          />
          <Field
            component={renderCheckbox}
            id="active"
            name="active"
            width="3"
            value="0"
            type="checkbox"
            label="Active"
          />
        </Form.Group>
        <Form.Group>
          <Form.Field width="4">
            <Button type="submit" color={updatingFlight ? 'green' : 'blue'}>
              {updatingFlight ? 'Update' : 'Create'}
            </Button>
            {updatingFlight ? <Button onClick={unsetUpdatingFlight}>Cancel</Button> : null}
          </Form.Field>
          <Form.Field width="12">
            {this.props.anyTouched && renderFirstError(errors)}
          </Form.Field>
        </Form.Group>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'flight',
  enableReinitialize: true,
  validate,
})(FlightForm);
