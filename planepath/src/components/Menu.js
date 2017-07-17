import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu as SMenu } from 'semantic-ui-react';

const Menu = () => (
  <Grid container>
    <Grid.Row>
      <Grid.Column>
        <SMenu color="blue" inverted>
          <SMenu.Item as={Link} to="/">
            Trips
          </SMenu.Item>
          <SMenu.Menu position="right">
            <SMenu.Item as={Link} to="/login">
              Login
            </SMenu.Item>
          </SMenu.Menu>
        </SMenu>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Menu;
