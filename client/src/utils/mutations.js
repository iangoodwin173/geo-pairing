import { gql } from '@apollo/client';

const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        drinks {
          _id
          name
          recipe
          image
          link
        }
        drinksCount
      }
    }
  }
`;

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        drinks {
          _id
          name
          recipe
          image
          link
        }
        drinksCount
      }
    }
  }
`;

const ADD_DRINK = gql`
  mutation addDrink($drinkText: String!) {
    addDrink(drinkText: $drinkText) {
      _id
      name
      recipe
      image
      link
    }
  }
`;

const REMOVE_DRINK = gql`
  mutation removeDrink($drinkId: ID!) {
    removeDrink(drinkId: $drinkId) {
      _id
      name
      recipe
      image
      link
    }
  }
`;

export { ADD_USER, LOGIN_USER, ADD_DRINK, REMOVE_DRINK };
