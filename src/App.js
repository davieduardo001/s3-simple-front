import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { darkTheme, lightTheme } from './Assets/Theme';
import Header from './Components/Header';

const App = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  // Styles
  const container = { 
    color: currentTheme.text,
    height: '100vh',
    padding: '20px'
  };

  const themeButton = {
    backgroundColor: currentTheme.primary,
    color: currentTheme.background,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    padding: '10px 10px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '50px',
  };

  // Main funcion
  return (
    <motion.div 
      animate={{ backgroundColor: currentTheme.background }}
      transition={{ duration: 0.5 }}
      style={container}
    >
      
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Header theme={currentTheme}/>

        <button
          onClick={toggleTheme}
          style={themeButton}
        >
          {isDarkTheme ? 'Light' : 'Dark'} Mode
        </button>
      </div>

    </motion.div>
  );

}

export default App;