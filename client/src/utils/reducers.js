// reducers.js
import { SAVE_COCKTAIL } from './actions';

const initialState = {
  Cocktails: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_COCKTAIL:
      return {
        ...state,
        Cocktails: [...state.Cocktails, action.payload], // Add the new cocktail from payload to the state
      };
      
    default:
      return state;
  }
};
