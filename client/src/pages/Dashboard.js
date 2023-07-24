import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import fetchCityData from "../services/cityService";
import fetchCocktailData from "../services/cocktailService";

import "../style/dashboard.css";

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

      const cocktailNames = cocktailDataResult.drinks.map(
        (drink) => drink.strDrink
      );
      const cocktailIngredients = cocktailDataResult.drinks.map((drink) => ({
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
      console.error("An error occurred while fetching data:", error);
    }
  };

  return (
   <div className="dashboard-container">
        <div className="header-container">
        <h1>Dashboard</h1>
          <Row>
            <Col className="intro-col" sm={6}>
          <p className="p-class">
            <h2>Welcome to Cocktail Finder!</h2> <br></br>
            easily search for cocktails by name or by ingredient, making it a
            breeze to find your perfect drink. To help you further refine your
            search, we have provided convenient filter classes for you to
            explore. You can narrow down your options by choosing the type of
            glass you prefer, the alcohol category you're in the mood for, or
            even the specific ingredient you'd like to include in your cocktail.
            Feeling adventurous? Why not try our "View Random Selection"
            feature! Discover exciting new cocktail recipes at the click of a
            button and let your taste buds be surprised. Once you find a recipe
            you love, you can save it to your personal dashboard. Your dashboard
            becomes a collection of all your favorite cocktails, making it easy
            to access and recreate them whenever you desire. Whether you're a
            cocktail enthusiast or just looking for something refreshing, our
            app has something for everyone. So, go ahead, explore, and start
            saving your favorite cocktails! Cheers to great drinks and even
            greater experiences!
          </p>
          </Col>
          
          <Col className="search-col" sm={5}>
          <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="city">
          <Form.Label> <h2>Cocktail Search</h2></Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by name"
            {...register("city")}
          />
        </Form.Group>

        <Form.Group controlId="cocktail">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by Ingredient"
            {...register("cocktail")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Fetch Data
        </Button>
      </Form>
            </Col>
          </Row>
        </div>
      

    
        <div className="options-container">
          <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="city">
          <Form.Label> <h2>Cocktail Search</h2></Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by name"
            {...register("city")}
          />
        </Form.Group>

        <Form.Group controlId="cocktail">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by Ingredient"
            {...register("cocktail")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Fetch Data
        </Button>
      </Form>
         

          <Col className="display-container" md={6}>
            <h2>Recipe Collection</h2>
          </Col>
        </div>
     

   

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
                  <li key={cocktail} className="cocktail-results-list">
                    {/* <a
              className="cocktail-results-links"
              href={`https://thecocktaildb.com/browse.php?s=${cocktail}`}
              target="_blank" //Open link in a new tab
              rel="noopener noreferrer" // Recommended for security when using target="_blank"
            >
              
            </a> */}
                    <button className="save-button">💾</button>
                    {cocktail}:
                    <ul>
                      {cocktailIngredients &&
                        cocktailIngredients[index] &&
                        Object.values(cocktailIngredients[index]).map(
                          (ingredient, idx) =>
                            ingredient ? (
                              <li
                                key={idx}
                                className="cocktail-ingredients-list"
                              >
                                {ingredient}
                              </li>
                            ) : null
                        )}
                    </ul>
                  </li>
                ))}
            </ul>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
