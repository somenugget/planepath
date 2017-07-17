import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import Navigation from './containers/Navigation';
import Trips from './pages/Trips';
import Login from './pages/Login';
import Logout from './pages/Logout';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <Navigation />

          <Route exact path="/" component={Trips} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
