import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

// Separate component to consume the context
const ThemedApp = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyles = {
    height: '100vh',
    margin: 0,
    padding: '20px',
    backgroundColor: theme === 'light' ? '#fefefe' : '#222',
    color: theme === 'light' ? '#222' : '#eee',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={appStyles}>
      <button onClick={toggleTheme} style={{ marginBottom: '20px' }}>
        Toggle Theme (Current: {theme})
      </button>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
