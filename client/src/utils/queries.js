import { gql } from '@apollo/client';


export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      username
      email
    }
  }
`;

export const GET_DRINKS = gql`
  query GetDrinks($username: String) {
    drinks(username: $username) {
      _id
      name
      recipe
      image
      link
    }
  }
`;


export const GET_USER = gql`
  query GetUser($username: String!) {
    user(username: $username) {
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
`;

export const GET_DRINK = gql`
  query GetDrink($drinkId: ID!) {
    drink(drinkId: $drinkId) {
      _id
      name
      recipe
      image
      link
    }
  }
`;

export const GET_ME = gql`
  query Me {
    me {
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
`;

export const GET_COCKTAILS = gql`
  query GetCocktails {
    getCocktails {
      idDrink
      strDrink
      strInstructions
    }
  }
`;
