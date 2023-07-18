import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signupFormHandler = async (event) => {
    event.preventDefault();
    const emailTrimmed = email.trim();
    const fullNameTrimmed = fullName.trim();
    const usernameTrimmed = username.trim();
    const passwordTrimmed = password.trim();

    if (emailTrimmed && fullNameTrimmed && usernameTrimmed && passwordTrimmed) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: emailTrimmed,
          fullName: fullNameTrimmed,
          username: usernameTrimmed,
          password: passwordTrimmed,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        history.push('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center vh-100">
        <Col xs={12} sm={6} className="text-center">
          <Form id="signupForm" onSubmit={signupFormHandler}>
            <Form.Group controlId="inputEmail">
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="mb-3"
              />
            </Form.Group>
            <Form.Group controlId="inputFullName">
              <Form.Control
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter full name"
                className="mb-3"
              />
            </Form.Group>
            <Form.Group controlId="inputUsername">
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="mb-3"
              />
            </Form.Group>
            <Form.Group controlId="inputPassword">
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="mb-3"
              />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
