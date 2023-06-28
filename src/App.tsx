import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Weather from './pages/Weather/Weather';
// import Footer from './components/Footer/Footer';
import './styles/app.scss';


const App: React.FC = () => {

  return (
    <div className='app-wrapper'>
      <Navbar />
      <Search />
      <section>
        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
      </section>
      <Weather />
      {/* <Footer /> */}
    </div>

  );
};

export default App;