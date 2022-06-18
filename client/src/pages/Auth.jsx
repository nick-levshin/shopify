import React, { useContext } from 'react';
import { Container, Form, Card, Button } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import './Auth.sass';
import { login, registration } from '../http/userAPI';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }

      user.setUser(data);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 67 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Log In' : 'Sign Up'}</h2>
        <Form className="d-flex flex-column align-items-center">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3"
            placeholder="Email"
          />
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3"
            placeholder="Password"
            type="password"
          />
          <div className="buttons mt-3">
            {isLogin ? (
              <>
                <div>
                  Don't have an account?{' '}
                  <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
                </div>
                <Button variant="outline-success" onClick={auth}>
                  Log In
                </Button>
              </>
            ) : (
              <>
                <div>
                  Already have an account?{' '}
                  <NavLink to={LOGIN_ROUTE}>Log In</NavLink>
                </div>
                <Button onClick={auth} variant="outline-success">
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
