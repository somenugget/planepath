import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import Authorization from './components/Authorization';
import Navigation from './containers/Navigation';
import Trips from './pages/Trips';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Flights from './pages/Flights';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <Navigation />

          <Route exact path="/" component={Trips} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/flights" component={Authorization(Flights, ['organisation'])} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
