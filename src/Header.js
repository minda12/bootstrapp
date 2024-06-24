import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import CartContext from './CartContext';

import './Headerr.css';

function Header(props) {

  const ctx = useContext(CartContext)
  return (
    <Navbar bg="dark" variant="dark">
      <div className='Headerr'>
        <Container className='d-flex justify-content-center'>
          <Nav className="w-90 d-flex justify-content-between">
            {ctx.IsLogIn && <NavLink exact to='/' className="me-4 color-white nav-link">Home</NavLink>}
            {ctx.IsLogIn &&<NavLink to='/Store' className="me-3 nav-link" >Store</NavLink>}
            <NavLink to='/About' className="me-3 nav-link">About</NavLink>
            <NavLink to='/ContactUs' className="me-3 nav-link">Contact Us</NavLink>
            <NavLink to='/login' className="me-3 nav-link">Login</NavLink>
          </Nav>
        </Container>
      </div>
    </Navbar>
  );
}

export default Header;
