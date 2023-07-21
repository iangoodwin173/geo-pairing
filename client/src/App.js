import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import Navbar from './pages/navbar';
import Contact from './pages/Contact';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar></Navbar>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
