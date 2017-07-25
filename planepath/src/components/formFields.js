import _ from 'lodash';
import React from 'react';
import { Form, Search, Checkbox } from 'semantic-ui-react';

export const renderField = ({
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

export const renderCheckbox = ({
  input,
  required,
  label,
  name,
  id,
}) => (
  <Form.Field required={required}>
    <label htmlFor={id}>{label}</label>
    <Checkbox
      id={id}
      name={name}
      checked={!!input.value}
      onChange={(e, data) => { input.onChange(data.checked); }}
    />
  </Form.Field>
);

export const renderSelect = ({
  input: { onChange, onBlur, value },
  meta: { touched, error },
  required,
  results,
  label,
  name,
  id,
}) => {
  let initialString = '';

  if (value) {
    const selectedItem = _.find(results, { id: value });
    if (selectedItem) {
      initialString = selectedItem.title;
    }
  }

  return (
    <Form.Field required={required} error={touched && !!error}>
      <label htmlFor={id}>{label}</label>
      <Search
        id={id}
        results={results}
        name={name}
        value={initialString}
        onResultSelect={(e, data) => { onChange(data.result.id); onBlur(); }}
      />
    </Form.Field>
  );
};
