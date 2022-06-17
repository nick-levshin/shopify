import React from 'react';
import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import './Auth.sass';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 67 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Authorization</h2>
        <Form className="d-flex flex-column align-items-center">
          <Form.Control className="mt-3" placeholder="Email" />
          <Form.Control className="mt-3" placeholder="Password" />
          <div className="buttons mt-3">
            {isLogin ? (
              <>
                <div>
                  Don't have an account?{' '}
                  <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
                </div>
                <Button variant="outline-success">Log In</Button>
              </>
            ) : (
              <>
                <div>
                  Already have an account?{' '}
                  <NavLink to={LOGIN_ROUTE}>Log In</NavLink>
                </div>
                <Button variant="outline-success">Sign Up</Button>
              </>
            )}
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
