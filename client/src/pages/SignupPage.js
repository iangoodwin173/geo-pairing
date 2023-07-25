import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { useForm } from 'react-hook-form';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SIGNUP_MUTATION = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

const SignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();
  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION);

  const onSubmit = async ({ email, fullName, username, password }) => {
    try {
      const response = await signup({
        variables: {
          email: email.trim(),
          fullName: fullName.trim(),
          username: username.trim(),
          password: password.trim(),
        },
      });

      if (response.data) {
        history.push('/redirect');
      }
    } catch (error) {
      console.error('An error occurred during signup:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred during signup :(</p>;
  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center vh-100">
        <Col lg={12} sm={6} className="text-center">
          <Form id="signupForm" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="email" className="mb-1">
              <Form.Label></Form.Label>
              <Form.Control
                {...register('email', { required: "Email is required." })}
                type="email"
                placeholder="Enter email"
              />
              {errors.email && <p>{errors.email.message}</p>}
              <Form.Text className="text-muted">
               
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="fullName" className="mb-1">
              <Form.Label></Form.Label>
              <Form.Control
                {...register('fullName', { required: "Full name is required." })}
                type="text"
                placeholder="Full Name"
              />
              {errors.fullName && <p>{errors.fullName.message}</p>}
            </Form.Group>

            <Form.Group controlId="username" className="mb-1">
              <Form.Label></Form.Label>
              <Form.Control
                {...register('username', { required: "Username is required." })}
                type="text"
                placeholder="Username"
              />
              {errors.username && <p>{errors.username.message}</p>}
            </Form.Group>

            <Form.Group controlId="password" className="mb-4">
              <Form.Label></Form.Label>
              <Form.Control
                {...register('password', { required: "Password is required." })}
                type="password"
                placeholder="Password"
              />
              {errors.password && <p>{errors.password.message}</p>}
            </Form.Group>

            <Button variant="primary" type="submit" style={{ width: '100%' }}>
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
