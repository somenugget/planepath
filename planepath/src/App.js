import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import Menu from './components/Menu';
import Trips from './components/pages/Trips';
import Login from './components/pages/Login';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <Menu />

          <Route exact path="/" component={Trips} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
