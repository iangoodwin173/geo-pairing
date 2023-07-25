import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {useState, useEffect} from 'react';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import Navbar from './components/navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Redirect from './components/Redirect';
import CocktailData from './pages/CocktailData';

import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  const [showModal, setShowModal] = useState(false);
  const modalView = document.querySelector(".modal")
  

  useEffect(() => {
    // Show the modal after 1000ms (1 second)
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  

  const handleCloseModal = () => {
    setShowModal(false);
    const timer = setTimeout(() => {
    modalView.style.display = 'none';
  }, 1000);

  return () => clearTimeout(timer);
    
    
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar></Navbar>
        <div className="flex-column justify-center align-center min-100-vh bg-light">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/redirect" component={Redirect} />
            <Route exact path="/data" component={CocktailData} />
            
          </Switch>
          <div className={`modal ${showModal ? 'active' : ''}`}>
            <div className="modal-content">
              <h2>Welcome to Geo-Pairing!</h2>
              <p>By continuing, you affirm that you are 21+ (18+ in some jurisdictions)</p>
              <button className='modal-button' onClick={handleCloseModal}>I am legal</button>
            </div>
          </div>
        </div>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
