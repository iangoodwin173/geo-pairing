export const SAVE_COCKTAIL = 'SAVE_COCKTAIL';

export const saveCocktail = (cocktailName, ingredients) => {
  return {
    type: SAVE_COCKTAIL,
    payload: {
      cocktailName,
      ingredients,
    },
  };
};
