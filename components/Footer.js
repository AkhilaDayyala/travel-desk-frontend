import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 50%, ${({ theme }) => theme.colors.secondary} 100%);
  color: ${({ theme }) => theme.colors.white};
  padding: 40px 20px;
  text-align: center;
  border-top: 2px solid ${({ theme }) => theme.colors.white};
  position: relative;
  
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
  
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const SocialMediaIcons = styled.div`
  margin: 20px 0;
  
  a {
    color: ${({ theme }) => theme.colors.white};
    margin: 0 10px;
    font-size: 24px;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      transform: scale(1.2);
    }
  }
`;

const Footer = () => (
  <FooterContainer role="contentinfo">
    <FooterText>
      &copy; 2024 TravelDesk. All rights reserved. | <a href="/privacy-policy">Privacy Policy</a>
    </FooterText>
    <SocialMediaIcons>
      <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
    </SocialMediaIcons>
  </FooterContainer>
);

export default Footer;
