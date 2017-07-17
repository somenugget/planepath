import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Dropdown, Menu as SMenu } from 'semantic-ui-react';

const Menu = ({ user }) => {
  let rightPanel;

  if (user.isAuthenticated) {
    rightPanel = (
      <SMenu.Menu position="right">
        <SMenu.Item>
          Hello, {user.user.username}
        </SMenu.Item>
        <Dropdown item icon="user">
          <Dropdown.Menu>
            <Dropdown.Item>Statistics</Dropdown.Item>
            <Dropdown.Item>Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </SMenu.Menu>
    );
  } else {
    rightPanel = (
      <SMenu.Menu position="right">
        <SMenu.Item as={Link} to="/login">
          Login
        </SMenu.Item>
      </SMenu.Menu>
    );
  }

  return (
    <Grid container>
      <Grid.Row>
        <Grid.Column>
          <SMenu color="blue" inverted>
            <SMenu.Item as={Link} to="/">
              Trips
            </SMenu.Item>
            { rightPanel }
          </SMenu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Menu;
