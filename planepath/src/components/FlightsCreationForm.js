import React from 'react';
import _ from 'lodash';
import { Button, Form, Search, Message, Checkbox } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../validations/flight';

const renderField = ({
  meta: { touched, error },
  required,
  input,
  label,
  width,
  type,
  min,
  id,
}) => (
  <Form.Field required={required} error={touched && !!error} width={width}>
    <label htmlFor={id}>{label}</label>
    <input
      {...input}
      id={id}
      min={min}
      type={type}
      placeholder={label}
    />
  </Form.Field>
);

const renderCheckbox = ({
  input: { onChange },
  required,
  value,
  label,
  name,
  id,
}) => (
  <Form.Field required={required}>
    <label htmlFor={id}>{label}</label>
    <Checkbox
      id={id}
      name={name}
      value={value}
      onChange={(e, data) => { onChange(data.checked); }}
    />
  </Form.Field>
);

const renderSelect = ({
  input: { onChange, onBlur },
  meta: { touched, error },
  required,
  results,
  label,
  name,
  id,
}) => (
  <Form.Field required={required} error={touched && !!error}>
    <label htmlFor={id}>{label}</label>
    <Search
      id={id}
      results={results}
      name={name}
      onResultSelect={(e, data) => { onChange(data.result.id); onBlur(); }}
    />
  </Form.Field>
);

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

class FlightsCreationForm extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit} name="flight">
        <Form.Group widths="equal">
          <Field
            component={renderSelect}
            required
            id="from"
            name="from"
            label="From"
            results={this.props.cities}
          />
          <Field
            component={renderSelect}
            required
            id="to"
            name="to"
            label="To"
            results={this.props.cities}
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
          <Form.Field width="2">
            <Button type="submit" color="blue" fluid>Create</Button>
          </Form.Field>
          <Form.Field width="14">
            {this.props.anyTouched && renderFirstError(this.props.errors)}
          </Form.Field>
        </Form.Group>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'flight',
  validate,
})(FlightsCreationForm);
