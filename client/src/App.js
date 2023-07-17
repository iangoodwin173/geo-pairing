import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Navbar from './pages/navbar';

// import 'bootstrap/dist/css/bootstrap.css'; 
// Import Bootstrap CSS file

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
            <Route exact path="/About" component={About} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
