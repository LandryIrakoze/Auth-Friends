import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/FriendsList';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <Login />
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/friends' component={FriendsList} />
    </div>
  );
}

export default App;
