import React from 'react';
import { useContext } from 'react';
import { Context } from '..';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          style={{ color: '#fff', textDecoration: 'none' }}
          to={SHOP_ROUTE}
        >
          Shopify
        </NavLink>
        <Nav className="al-auto" style={{ color: '#fff' }}>
          {user.isAuth ? (
            <>
              <Button variant="outline-light">Admin</Button>
              <Button style={{ marginLeft: '0.5rem' }} variant="outline-light">
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline-light"
                onClick={() => user.setIsAuth(true)}
              >
                Authorization
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBar;
