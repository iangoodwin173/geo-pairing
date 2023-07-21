const fetchCocktailData = async (cocktailName) => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ cocktailName,);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.json();
  }
};

export default fetchCocktailData;
