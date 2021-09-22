import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getCurrentUser } from './actions/auth';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleCurrentUser = (user) => {
    if(user.username) {
      setCurrentUser(user);
      setLoggedIn(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getCurrentUser(handleCurrentUser)
  }, [])

  return (
    <Router>
      <Navbar loggedIn={ loggedIn } />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/signup" component={ Signup } />
        <Route exact path="/login" component={ Login } />
      </Switch>
    </Router>
  );
}

export default App;
