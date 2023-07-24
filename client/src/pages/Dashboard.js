import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import fetchCityData from '../services/cityService';
import fetchCocktailData from '../services/cocktailService';

import "../style/dashboard.css"

const Dashboard = () => {
  const { register, handleSubmit } = useForm();
  const [cityData, setCityData] = useState(null);
  const [cocktailData, setCocktailData] = useState(null);
  const [cocktailIngredients, setIngredients] = useState(null);

  const onSubmit = async ({ city, cocktail }) => {
    try {
      const cityDataResult = await fetchCityData(city);
      const cocktailDataResult = await fetchCocktailData(cocktail);
      console.log(cityDataResult, cocktailDataResult);

      const cocktailNames = cocktailDataResult.drinks.map(drink => drink.strDrink);
      const cocktailIngredients = cocktailDataResult.drinks.map(drink => ({
        ingredient1: drink.strIngredient1,
        ingredient2: drink.strIngredient2,
        ingredient3: drink.strIngredient3,
        ingredient4: drink.strIngredient4,
        ingredient5: drink.strIngredient5,
        ingredient6: drink.strIngredient6,
        ingredient7: drink.strIngredient7,
        ingredient8: drink.strIngredient8,
        ingredient9: drink.strIngredient9,
        ingredient10: drink.strIngredient10,
        ingredient11: drink.strIngredient11,
        ingredient12: drink.strIngredient12,
        ingredient13: drink.strIngredient13,
        ingredient14: drink.strIngredient14,
        ingredient15: drink.strIngredient15,

      }));
      
      setCityData(cityDataResult);
      setCocktailData(cocktailNames);
      setIngredients(cocktailIngredients);
      

      
      
      
      
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  };

  return (
    <Container>
      <h1>Dashboard</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter city" {...register('city')} />
        </Form.Group>

        <Form.Group controlId="cocktail">
          <Form.Label>Cocktail</Form.Label>
          <Form.Control type="text" placeholder="Enter cocktail" {...register('cocktail')} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Fetch Data
        </Button>
      </Form>

      <Row>
        <Col>
          <Container>
            <h2>City Data</h2>
            <p>{JSON.stringify(cityData)}</p>
          </Container>
        </Col>
        <Col>
  <Container>
    <h2>Cocktail Data</h2>
    <ul>
      {cocktailData &&
        cocktailData.map((cocktail, index) => (
          <li key={cocktail} className='cocktail-results-list'>
            {/* <a
              className="cocktail-results-links"
              href={`https://thecocktaildb.com/browse.php?s=${cocktail}`}
              target="_blank" //Open link in a new tab
              rel="noopener noreferrer" // Recommended for security when using target="_blank"
            >
              
            </a> */}

                <button className='save-button'>💾</button>
              {cocktail}: 

              
              
            <ul>
              {cocktailIngredients &&
                cocktailIngredients[index] &&
                Object.values(cocktailIngredients[index]).map((ingredient, idx) =>
                  ingredient ? <li key={idx} className='cocktail-ingredients-list'>{ingredient}</li> : null
                )}
            </ul>
          </li>
        ))}
    </ul>
  </Container>
</Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
