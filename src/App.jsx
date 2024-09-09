import React, { useState } from 'react';
import { color, motion } from 'framer-motion';
import { darkTheme, lightTheme } from './Assets/Theme';
import Header from './Components/Header';
import MainContent from './Components/MainContent'
import './App.css'

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
    padding: '20px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: currentTheme.background,
    backgroundImage: currentTheme.wallpaper
  };

  const themeButton = {
    color: currentTheme.primary,
    background: 'none',
    fontFamily: 'Lato',
    fontWeight: 900,
    textDecoration: 'underline',
    padding: '10px 10px',
    border: currentTheme.primary,
    cursor: 'pointer',
    borderRadius: '50px',
    fontSize: '14px'
  };

  // Main funcion
  return (
    <motion.div 
      key={currentTheme.background}
      style={{
        ...container,
        backgroundImage: currentTheme.wallpaper,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }} 
    >
      
      {/* HEADER */}
      <div className='header' style={{display: 'flex', justifyContent: 'space-between'}}>
        <Header theme={currentTheme}/>
        <button
          onClick={toggleTheme}
          style={themeButton}
        >
          {isDarkTheme ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      <main style={{display: 'flex', flexDirection: 'row', paddingTop: '70px'}}>
        <MainContent theme={currentTheme}/>
      </main>


    </motion.div>
  );

}

export default App;