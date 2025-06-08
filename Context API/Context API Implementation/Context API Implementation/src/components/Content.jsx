import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Content = () => {
  const { theme } = useContext(ThemeContext);

  const style = {
    padding: '20px',
    backgroundColor: theme === 'light' ? '#eee' : '#555',
    borderRadius: '5px',
    marginBottom: '10px',
  };

  return <main style={style}>This is the Content area</main>;
};

export default Content;
