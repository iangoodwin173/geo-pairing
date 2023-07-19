import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, gql, useQuery } from '@apollo/client';
import Home from './pages/Home';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const GET_COCKTAILS = gql`
  query {
    getCocktails {
      idDrink
      strDrink
      strInstructions
    }
  }
`;

// Define a separate component for rendering cocktails
function Cocktails() {
  const { loading, error, data } = useQuery(GET_COCKTAILS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      {data.getCocktails.map(cocktail => (
        <div key={cocktail.idDrink}>
          <h2>{cocktail.strDrink}</h2>
          <p>{cocktail.strInstructions}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* Add other routes and components here */}
          </Switch>
          <Cocktails /> {/* Render the Cocktails component */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;