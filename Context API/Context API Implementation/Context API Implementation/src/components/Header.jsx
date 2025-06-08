import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const style = {
    padding: '15px',
    backgroundColor: theme === 'light' ? '#ddd' : '#444',
    borderRadius: '5px',
    marginBottom: '10px',
  };

  return <header style={style}>This is the Header</header>;
};

export default Header;
