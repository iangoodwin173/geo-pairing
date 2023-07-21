import { useMutation, gql } from '@apollo/client';
import axios from 'axios';
import fetchCityData from './cityService';
import fetchCocktailData from './cocktailService';

const API_URL = 'http://localhost:5000/api/auth/';

// Create a mutation
const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

const Auth = () => {
  // Apollo Client mutation hook for login
  const [loginMutation, { loading, error, data }] = useMutation(LOGIN_MUTATION);

  // Function to handle login
  const handleLogin = async (email, password) => {
    try {
      // Use Apollo Client mutation for login
      const loginResponse = await loginMutation({ variables: { email, password } });

      // Process the login response
      // ...

      // Fetch city and cocktail data using AuthService
      const cityData = await authService.fetchCityData('Paris');
      const cocktailData = await authService.fetchCocktailData('Vodka');

      // Process the fetched city and cocktail data
      // ...

    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  // Render the component
  // ...
};

class AuthService {
  async login(email, password) {
    const response = await axios
      .post(API_URL + 'signin', {
        email,
        password
      });

    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(username, email, password) {
    return axios.post(API_URL + 'signup', {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  async fetchCityData(city) {
    return fetchCityData(city);
  }

  async fetchCocktailData(cocktail) {
    return fetchCocktailData(cocktail);
  }
}

const authService = new AuthService();

export { Auth, authService };
