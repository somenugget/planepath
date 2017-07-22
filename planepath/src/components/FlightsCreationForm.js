import React from 'react';
import { Button, Form, Search } from 'semantic-ui-react';

class FlightsCreationForm extends React.Component {
  constructor(props) {
    super(props);

    this.fromId = null;
    this.toId = null;
    this.codeInput = null;
    this.departureInput = null;
    this.durationInput = null;
    this.costInput = null;

    console.log(this.props);

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(
      this.props.user.token,
      this.fromId,
      this.toId,
      this.codeInput.value,
      this.departureInput.value,
      this.durationInput.value,
      this.costInput.value,
    );
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <Form.Group widths="equal">
          <Form.Field required>
            <label htmlFor="from">From</label>
            <Search id="from" results={this.props.cities} onResultSelect={(e, data) => { this.fromId = data.result.id; }} />
          </Form.Field>
          <Form.Field required>
            <label htmlFor="to">To</label>
            <Search id="to" results={this.props.cities} onResultSelect={(e, data) => { this.toId = data.result.id; }} />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field required>
            <label htmlFor="code">Code</label>
            <input
              id="code"
              placeholder="Code"
              ref={(node) => { this.codeInput = node; }}
            />
          </Form.Field>
          <Form.Field required>
            <label htmlFor="departure">Departure</label>
            <input
              id="departure"
              placeholder="Departure"
              ref={(node) => { this.departureInput = node; }}
            />
          </Form.Field>
          <Form.Field required>
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              placeholder="Duration"
              ref={(node) => { this.durationInput = node; }}
            />
          </Form.Field>
          <Form.Field required>
            <label htmlFor="cost">Cost</label>
            <input
              id="cost"
              placeholder="Cost"
              ref={(node) => { this.costInput = node; }}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field width="4">
          <Button type="submit" color="blue">Create</Button>
        </Form.Field>
      </Form>
    );
  }
}

export default FlightsCreationForm;
