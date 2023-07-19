import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, gql, useQuery } from '@apollo/client';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Navbar from './pages/navbar';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  
  
  return (
    <ApolloProvider client={client}>
   
   
   
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            


            {/* Add other routes and components here */}
          </Switch>
          

          

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
