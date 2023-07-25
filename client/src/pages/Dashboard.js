import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import fetchCocktailData from "../services/cocktailService";
import "../style/dashboard.css";

const Dashboard = () => {
  const { register, handleSubmit } = useForm();
  const [cocktailData, setCocktailData] = useState(null);
  const [cocktailIngredients, setIngredients] = useState(null);
  const [savedCocktails, setSavedCocktails] = useState([]);
  
  const onSubmit = async ({ cocktail }) => {
    try {
      const cocktailDataResult = await fetchCocktailData(cocktail);
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
      setCocktailData(cocktailNames);
      setIngredients(cocktailIngredients);
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  const handleSave = (cocktailName, ingredients) => {
    setSavedCocktails([...savedCocktails, {cocktailName, ingredients}]);
  };

  return (
    <div className="dashboard-container">
      <div className="header-container">
        <h1>Dashboard</h1>
        <Row>
          <Col className="intro-col" sm={6}>
            <h2>Welcome to Cocktail Finder!</h2>
            <p className="p-class">
              <br></br>
              easily search for cocktails by name or by ingredient, making it a
              breeze to find your perfect drink. To help you further refine your
              search, we have provided convenient filter classes for you to
              explore. You can narrow down your options by choosing the type of
              glass you prefer, the alcohol category you're in the mood for, or
              even the specific ingredient you'd like to include in your
              cocktail. Feeling adventurous? Why not try our "View Random
              Selection" feature! Discover exciting new cocktail recipes at the
              click of a button and let your taste buds be surprised. Once you
              find a recipe you love, you can save it to your personal
              dashboard. Your dashboard becomes a collection of all your
              favorite cocktails, making it easy to access and recreate them
              whenever you desire. Whether you're a cocktail enthusiast or just
              looking for something refreshing, our app has something for
              everyone. So, go ahead, explore, and start saving your favorite
              cocktails! Cheers to great drinks and even greater experiences!
              </p>
          </Col>
          <Col className="search-col" sm={5}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="city">
                <Form.Label>
                  {" "}
                  <h2>Cocktail Search</h2>
                </Form.Label>
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
      <h2>Cocktail Data</h2>
      <Container>
        <Row>
          {cocktailData && cocktailData.map((cocktail, index) => (
            <Col sm={4} className="cocktail-results-list" key={cocktail}>
              <Button onClick={() => handleSave(cocktail, cocktailIngredients[index])} className="save-button">Save</Button>
              {cocktail}:
              <ul>
                {cocktailIngredients &&
                  cocktailIngredients[index] &&
                  Object.values(cocktailIngredients[index]).map(
                    (ingredient, idx) =>
                      ingredient ? (
                        <li key={idx} className="cocktail-ingredients-list">
                          {ingredient}
                        </li>
                      ) : null
                  )}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h2>Saved Cocktails</h2>
        <Row>
          {savedCocktails.map((cocktail, index) => (
            <Col sm={4} key={cocktail.cocktailName}>
              <h2>{cocktail.cocktailName}</h2>
              <ul>
                {Object.values(cocktail.ingredients).map((ingredient, idx) =>
                  ingredient ? (
                    <li key={idx} className="cocktail-ingredients-list">
                      {ingredient}
                    </li>
                  ) : null
                )}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;

