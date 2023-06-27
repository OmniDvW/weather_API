import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Weather from './pages/Weather/Weather';
import Footer from './components/Footer/Footer';
import './styles/app.scss';
// import { useSelector } from 'react-redux';
// import { ThemeProvider } from 'styled-components';
// import { AppStore } from './store/store';
// import { darkTheme, lightTheme } from './theme';

const App: React.FC = () => {
  // const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    <div className='app-wrapper'>
      <Navbar />
      <Search />
      <Weather />
      <Footer />
    </div>

  );
};

export default App;