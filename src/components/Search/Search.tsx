import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults, fetchForecastWeather, fetchAstronomy } from '../../store/thunks/weatherThunks';
import { AppStore, AppDispatch } from '../../store/store';
import './Search.scss';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';


const Search: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedCityIndex, setSelectedCityIndex] = useState<number>(0);
    const [showResults, setShowResults] = useState<boolean>(true);
    const dispatch: AppDispatch = useDispatch();
    const searchResults = useSelector((state: AppStore) => state.weather.searchData);
    const ulRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (searchText) {
            dispatch(fetchSearchResults(searchText));
        }
    }, [searchText, dispatch]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ulRef.current && !ulRef.current.contains(event.target as Node)) {
                setShowResults(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchText(value);
        setShowResults(true);
    };

    const handleCityClick = async (cityName: string, cityLat: number, cityLon: number) => {
        dispatch(fetchForecastWeather({ name: cityName, lat: cityLat, lon: cityLon }));
        dispatch(fetchAstronomy({ lat: cityLat, lon: cityLon }));
        setShowResults(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const selectedCityKey = Object.keys(searchResults)[selectedCityIndex];
            const selectedCity = searchResults[selectedCityKey];
            if (selectedCity) {
                handleCityClick(selectedCity.name, selectedCity.lat, selectedCity.lon);
            }
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedCityIndex((prevIndex) => {
                if (prevIndex === null || prevIndex === 0) {
                    return searchResults.length - 1;
                } else {
                    return prevIndex - 1;
                }
            });
        }

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedCityIndex((prevIndex) => {
                if (prevIndex === null || prevIndex === searchResults.length - 1) {
                    return 0;
                } else {
                    return prevIndex + 1;
                }
            });
        }
    };

    const handleMouseEnter = (index: number) => {
        setSelectedCityIndex(index);
    };

    return (
        <div className='search-wrapper'>
            <div className='search-bar'>
                <SearchIcon />
                <input
                    type="text"
                    placeholder='La météo pour...'
                    value={searchText}
                    onChange={handleSearchInputChange}
                    onKeyDown={handleKeyPress}
                />
            </div>

            <ul ref={ulRef} className={showResults && searchResults && Object.keys(searchResults).length > 0 ? 'show-search-results' : ''}>
                {showResults &&
                    searchResults &&
                    Object.keys(searchResults).length > 0 &&
                    Object.keys(searchResults).map((key: string, index: number) => {
                        const city = searchResults[key];
                        const isSelected = index === selectedCityIndex;
                        const className = isSelected ? 'city-selected' : '';

                        return (
                            <li
                                key={city.url}
                                className={className}
                                onClick={() => handleCityClick(city.name, city.lat, city.lon)}
                                onMouseEnter={() => handleMouseEnter(index)}
                            >
                                <PlaceIcon />
                                <div className='city'>
                                    <p>{city.name}</p>
                                    <span>
                                        <span>{city.region}, </span>
                                        <span>{city.country}</span>
                                    </span>
                                </div>

                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Search;