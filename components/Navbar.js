// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0); /* Fully transparent */
  position: absolute; /* Adjust position to make it float over background */
  width: 100%;
  box-shadow: none; /* Remove any shadow for transparency effect */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #000; /* Black color for text */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.secondary}; /* Optional: color change on hover */
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <h1 style={{ color: '#000' }}>Travel Desk</h1> {/* Black color for the logo text */}
      </div>
      <NavLinks>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
