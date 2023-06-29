import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from './store/store';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Weather from './pages/Weather/Weather';
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation';
import HomeAnimation from './components/HomeAnimation/HomeAnimation';
import './styles/app.scss';


const App: React.FC = () => {

  const { forecastData, isLoading, error } = useSelector((state: AppStore) => ({
    forecastData: state.weather.forecastData,
    isLoading: state.weather.isLoading,
    error: state.weather.error,
  }));

  // useEffect(() => {
  // }, [forecastData, isLoading, error]);

  return (
    <div className='app-wrapper'>
      <Navbar />
      <Search />
      {isLoading ? (
        <HomeAnimation />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {!forecastData &&
            <div>
              <HomeAnimation />
            </div>}
          {forecastData &&
            <Weather />
          }
        </div>
      )}
      <div className='sign'> <span>Developed by </span><a href="https://github.com/OmniDvW" target='blank' >OmniDvW</a></div>
      <BackgroundAnimation />
    </div>

  );
};

export default App;