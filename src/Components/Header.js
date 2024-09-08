// src/components/Header.js

import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = ({ theme }) => {

    const header = {
        color: theme.primary, /* White text color */
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    const linkStyleSelected = {
        color: theme.primary, /* White text color for links */
        textDecoration: 'underline',
        fontWeight: 900
    }

    const linkStyle = {
        color: theme.primary, /* White text color for links */
        textDecoration: 'none',
        fontWeight: 900
    }

    return (
    <header 
        className="header"
        style={header}>
      <nav>
        <ul>
          <li><a style={linkStyleSelected} href="#home">Home</a></li>
          <li><a style={linkStyle} href="#about">Sobre</a></li>
          <li><a style={linkStyle} href="#contact">Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
