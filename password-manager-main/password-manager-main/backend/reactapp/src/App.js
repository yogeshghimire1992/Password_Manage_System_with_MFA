import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Include Navbar here */}
      <div className="content">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/" exact>
            <h2>Welcome to the Password Manager</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
