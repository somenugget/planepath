import React from 'react';
import { Loader } from 'semantic-ui-react';
import GridPage from './GridPage';

class Loading extends React.Component {
  render() {
    return (
      <GridPage>
        <Loader active inline="centered" />
      </GridPage>
    );
  }
}

export default Loading;
