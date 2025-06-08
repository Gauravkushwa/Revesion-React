import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const style = {
    padding: '15px',
    backgroundColor: theme === 'light' ? '#ddd' : '#444',
    borderRadius: '5px',
  };

  return <footer style={style}>This is the Footer</footer>;
};

export default Footer;
