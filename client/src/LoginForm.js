import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (email && password) {
      try {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/userhome');
        } else {
          alert('Failed to log in');
        }
      } catch (error) {
        console.error('An error occurred during login:', error);
      }
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Form onSubmit={handleFormSubmit} className="w-50">
        <Row className="mb-3">
          <Col sm={8} className="mx-auto">
            <Form.Control
              type="email"
              id="inputEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              placeholder="Enter email"
              // className="mb-3"
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={8} className="mx-auto">
            <Form.Control
              type="password"
              id="inputPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
              placeholder="Password"
            />
          </Col>
        </Row>

        <div className="text-center">
          <Button variant="primary" type="submit">Login</Button>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;