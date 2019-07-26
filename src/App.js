import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Dashboard from './Screens/Dashboard/Dashboard';
import Proxies from './Screens/Proxies/Proxies';
import Billing from './Screens/Billing/Billing';
import Success from './Screens/Success/Success';
import Settings from './Screens/Settings/Settings';

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={Header} />
        <Route exact path='/' component={Dashboard} />
        <Route path='/proxies' component={Proxies} />
        <Route path='/billing' component={Billing} />
        <Route path='/success' component={Success} />
        <Route path='/settings' component={Settings} />
        <Route component={Footer} />
      </div>
    </Router>
  );
}

export default App;
