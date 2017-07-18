import React from 'react';
import GridPage from './GridPage';

class NotAllowed extends React.Component {
  render() {
    return (
      <GridPage>
        <h1>You are not allowed to visit this page!</h1>
      </GridPage>
    );
  }
}

export default NotAllowed;
