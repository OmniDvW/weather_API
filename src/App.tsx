import React from 'react';
import Home from './pages/Home';
// import { useSelector } from 'react-redux';
// import { ThemeProvider } from 'styled-components';
// import { AppStore } from './store/store';
// import { darkTheme, lightTheme } from './theme';

const App: React.FC = () => {
  // const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    // <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    //   <GlobalStyles />
    <Home />
    // </ThemeProvider> 
  );
};

export default App;