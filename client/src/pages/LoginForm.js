import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
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
        history.push('/userhome');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred during login :(</p>;

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Form onSubmit={handleSubmit(onSubmit)} className="w-50">
        <Row className="mb-3">
          <Col sm={8} className="mx-auto">
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
            <Form.Control 
              {...register('password', { required: "Password is required." })}
              type="password"
              placeholder="Password"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </Col>
        </Row>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;