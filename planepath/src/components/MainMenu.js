import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Dropdown, Menu } from 'semantic-ui-react';

const MainMenu = ({ user }) => {
  let rightPanel;
  let flightsLink;
  if (user.isAuthenticated) {
    rightPanel = (
      <Menu.Menu position="right">
        <Menu.Item>
          Hello, {user.user.username}
        </Menu.Item>
        <Dropdown item icon="user">
          <Dropdown.Menu>
            <Dropdown.Item>Statistics</Dropdown.Item>
            <Dropdown.Item as={Link} to="/logout">Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    );
  } else {
    rightPanel = (
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/login">
          Login
        </Menu.Item>
      </Menu.Menu>
    );
  }

  if (user.user && user.user.role === 'organisation') {
    flightsLink = (
      <Menu.Item as={Link} to="/flights">
        Flights
      </Menu.Item>
    );
  } else {
    flightsLink = null;
  }

  return (
    <Grid container>
      <Grid.Row>
        <Grid.Column>
          <Menu color="blue" inverted>
            <Menu.Item as={Link} to="/">
              Trips
            </Menu.Item>
            { flightsLink }

            { rightPanel }
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default MainMenu;
