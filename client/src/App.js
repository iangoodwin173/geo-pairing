import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import LoginForm from './LoginForm';
import SignupPage from './SignupPage';  

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/LoginForm" component={LoginForm} />
            <Route exact path="/SignupPage" component={SignupPage} /> 
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
