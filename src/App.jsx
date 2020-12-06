import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarLoto from './components/navbar';
import Login from './pages/login';
import Register from './pages/register';

const App = () => {
  return (
    <Router>
      <NavbarLoto />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
};
export default App;
