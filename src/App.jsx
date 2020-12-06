import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarLoto from './components/navbar';
import Login from './pages/login';
import Register from './pages/register';
import UserList from './pages/userList';

const App = () => {
  return (
    <Router>
      <NavbarLoto />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/test" component={UserList} />
      </Switch>
    </Router>
  );
};
export default App;
