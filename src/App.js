import React, { createContext, useContext, useState } from 'react';
import { ThemeContext, ThemeProvider } from './Components/ThemeContext';


const App = () => {

  // Hooks
  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

  // Styles
  const container = { 
    backgroundColor: theme.background,
    color: theme.text,
    height: '100vh',
    padding: '20px'
  }
  
  // Main funcion
  return (
    <div style={container}>
      <p style={{ color: theme.secondary }}>
        This is a simple app that toggles between dark and light themes using React Context.
      </p>

      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme.accentLight,
          color: theme.text,
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Switch to {isDarkMode ? 'Light' : 'Dark'} Theme
      </button>
    </div>
  );

}

export default function ThemedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}