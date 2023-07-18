import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, gql, useQuery } from '@apollo/client';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './pages/navbar';
import './App.css';

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
            <Route path="/About" component={About} />
            


            {/* Add other routes and components here */}
          </Switch>
          

          

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
