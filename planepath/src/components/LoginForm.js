import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.usernameInput = null;
    this.passwordInput = null;
    this.formSubmit = this.formSubmit.bind(this);
  }

  componentDidMount() {
    this.usernameInput.focus();
  }

  formSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.usernameInput.value, this.passwordInput.value);
  }

  render() {
    const tryingToLogIn = this.props.tryingToLogIn;

    return (
      <Form onSubmit={this.formSubmit}>
        <Form.Field>
          <label htmlFor="username" >Username</label>
          <input
            id="username"
            placeholder="Username"
            ref={(node) => { this.usernameInput = node; }}
            disabled={tryingToLogIn}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password" >Password</label>
          <input
            id="password"
            placeholder="Password"
            ref={(node) => { this.passwordInput = node; }}
            disabled={tryingToLogIn}
          />
        </Form.Field>
        <Form.Field>
          <Button type="submit" color="blue" fluid disabled={tryingToLogIn}>Submit</Button>
        </Form.Field>
      </Form>
    );
  }
}

export default LoginForm;
