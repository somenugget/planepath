import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const LoginForm = ({ tryingToLogIn, onSubmit }) => {
  let usernameInput;
  let passwordInput;
  tryingToLogIn = false;
  const formSubmit = (e) => {
    e.preventDefault();
    onSubmit(usernameInput.value, passwordInput.value);
  };

  return (
    <Form onSubmit={formSubmit}>
      <Form.Field>
        <label htmlFor="username" >Username</label>
        <input
          id="username"
          placeholder="Username"
          ref={(node) => { usernameInput = node; }}
          disabled={tryingToLogIn}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="password" >Password</label>
        <input
          id="password"
          placeholder="Password"
          ref={(node) => { passwordInput = node; }}
          disabled={tryingToLogIn}
        />
      </Form.Field>
      <Form.Field>
        <Button type="submit" color="blue" fluid disabled={tryingToLogIn}>Submit</Button>
      </Form.Field>
    </Form>
  );
};

export default LoginForm;
