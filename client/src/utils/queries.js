import {gql} from '@apollo/client';

export const GET_MARGARITAS = gql `
query {
  getMargarita {
    idDrink
    strDrink
    strInstructions
  }
}`