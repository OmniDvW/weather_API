import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from './store/store';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Weather from './pages/Weather/Weather';
import HomeAnimation from './components/HomeAnimation/HomeAnimation';
// import Footer from './components/Footer/Footer';
import './styles/app.scss';


const App: React.FC = () => {

  const { forecastData, isLoading, error } = useSelector((state: AppStore) => ({
    forecastData: state.weather.forecastData,
    isLoading: state.weather.isLoading,
    error: state.weather.error,
  }));

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
      <section>
        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
      </section>
      <div className='sign'> <span>Developed by </span><a href="https://github.com/OmniDvW">OmniDvW</a></div>
    </div>

  );
};

export default App;