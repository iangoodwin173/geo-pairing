import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import fetchCityData from '../services/cityService';
import fetchCocktailData from '../services/cocktailService';

const Dashboard = () => {
  const { register, handleSubmit } = useForm();
  const [cityData, setCityData] = useState(null);
  const [cocktailData, setCocktailData] = useState(null);

  const onSubmit = async ({ city, cocktail }) => {
    try {
      const cityDataResult = await fetchCityData(city);
      const cocktailDataResult = await fetchCocktailData(cocktail);
      console.log(cityDataResult, cocktailDataResult);
      setCityData(cityDataResult);
      setCocktailData(cocktailDataResult);
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
            <p>{JSON.stringify(cocktailData)}</p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
