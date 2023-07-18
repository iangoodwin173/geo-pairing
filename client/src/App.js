import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, gql, useQuery } from '@apollo/client';
import Home from './pages/Home';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
const GET_MARGARITAS = gql `
query {
  getMargarita {
  idDrink
  strDrink
  strInstructions
  }
}`



function App() {
  const {loading, error, data} = useQuery(GET_MARGARITAS)
  if (loading) return <p>loading...</p>
  if (error) return <p>error...</p>
  return (
    <ApolloProvider client={client}>
   
   {data.getMargarita.map(margarita =>(
    <div key={margarita.idDrink}>
      <h2>{margarita.strDrink}</h2>
<p>{margarita.strInstructions}</p>
    </div>
   ))}
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            <Route exact path="/" component={Home} />

            {/* Add other routes and components here */}
          </Switch>
          

          

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
