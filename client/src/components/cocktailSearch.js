import React, { useState, useEffect } from 'react';
import CocktailCard from './CocktailCard';
import { getCocktailsBySearch, filterCocktails } from '../api/cocktailAPI';

const CocktailSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    alcoholic: '',
    category: '',
    glass: '',
  });

  useEffect(() => {
    const fetchCocktails = async () => {
      const data = await getCocktailsBySearch(searchQuery);
      setCocktails(data);
    };

    fetchCocktails();
  }, [searchQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    // Update searchQuery state and trigger useEffect to fetch data
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    // Update filterOptions state
    setFilterOptions((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleApplyFilters = async () => {
    const filteredCocktails = await filterCocktails(filterOptions);
    setCocktails(filteredCocktails);
  };

  return (
    <div>
      <h1>Search for Cocktails</h1>
      <form>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <div>
          <label>Alcoholic:</label>
          <select name="alcoholic" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Alcoholic">Alcoholic</option>
            <option value="Non_Alcoholic">Non-Alcoholic</option>
          </select>
        </div>
        <div>
          <label>Category:</label>
          <select name="category" onChange={handleFilterChange}>
            {/* Add category options based on available categories */}
          </select>
        </div>
        <div>
          <label>Glass:</label>
          <select name="glass" onChange={handleFilterChange}>
            {/* Add glass options based on available glass types */}
          </select>
        </div>
        <button type="button" onClick={handleApplyFilters}>
          Apply Filters
        </button>
      </form>
      <div>
        {/* Map through cocktails state and display cocktail cards */}
        {cocktails.map((cocktail) => (
          <CocktailCard key={cocktail.id} cocktail={cocktail} />
        ))}
      </div>
    </div>
  );
};

export default CocktailSearch;
