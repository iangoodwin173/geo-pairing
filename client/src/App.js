import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/Signup' component={Signup}></Route>
        <Route path='/Login' component={Login}></Route>
        <Route path='/Contact' component={Contact}></Route>
      </Switch>
    </Router>
      
  );
}

export default App;
