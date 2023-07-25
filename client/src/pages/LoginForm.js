import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/login.css'

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
  const onSubmit = async ({ email, password }) => {
    try {
      const response = await login({ variables: { email, password } });
      if (response.data) {
        history.push('/dashboard');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred during login :(</p>;
  return (
    <Container className="login-container d-flex align-items-center justify-content-center vh-100">
      <Form onSubmit={handleSubmit(onSubmit)} className="w-50">
        <Row className="mb-3">
          <Col sm={8} className="mx-auto">
            {/* Use Form.Control from react-bootstrap */}
            <Form.Control
              {...register('email', { required: "Email is required." })}
              type="email"
              placeholder="Enter email"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={8} className="mx-auto">
            {/* Use Form.Control from react-bootstrap */}
            <Form.Control
              {...register('password', { required: "Password is required." })}
              type="password"
              placeholder="Password"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </Col>
        </Row>
        <div className="text-center">
          {/* Use Button from react-bootstrap */}
          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
};
export default LoginForm;