// ./src/assets/Theme.js

import dark from './Images/dark-wallpaper.jpg';
import light from './Images/light-wallpaper.jpg';

export const lightTheme = {
    primary: '#16423C',
    secondary: '#6A9C89', 
    accentLight: '#C4DAD2',
    text: '#000000', // Dark text for light theme
    background: '#E9EFEC', // White background
    wallpaper: `url(${light})`
};

export const darkTheme = {
    primary: '#6A9C89',
    secondary: '#16423C',
    accentLight: '#C4DAD2',
    text: '#C4DAD2', // Light text for dark theme
    background: '#000000', // Dark background
    wallpaper: `url(${dark})`
};
