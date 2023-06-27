import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults, fetchRealtimeWeather } from '../../store/thunks/weatherThunks';
import { AppStore, AppDispatch } from '../../store/store';
import './Search.scss';

const Search: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedCityIndex, setSelectedCityIndex] = useState<number>(0);
    const [showResults, setShowResults] = useState<boolean>(true);
    const dispatch: AppDispatch = useDispatch();
    const searchResults = useSelector((state: AppStore) => state.weather.searchData);

    useEffect(() => {
        if (searchText) {
            dispatch(fetchSearchResults(searchText));
        }
    }, [searchText, dispatch]);

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchText(value);
        setShowResults(true);
    };

    const handleCityClick = (cityLat: number, cityLon: number) => {
        dispatch(fetchRealtimeWeather({ lat: cityLat, lon: cityLon }));
        setShowResults(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const selectedCityKey = Object.keys(searchResults)[selectedCityIndex];
            const selectedCity = searchResults[selectedCityKey];
            if (selectedCity) {
                handleCityClick(selectedCity.lat, selectedCity.lon);
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
        <div>
            <input
                type="text"
                value={searchText}
                onChange={handleSearchInputChange}
                onKeyDown={handleKeyPress}
            />
            <ul>
                {showResults &&
                    searchResults &&
                    Object.keys(searchResults).length > 0 &&
                    Object.keys(searchResults).map((key: string, index: number) => {
                        const city = searchResults[key];
                        const isSelected = index === selectedCityIndex;
                        const className = isSelected ? 'selected' : '';

                        return (
                            <li
                                key={city.url}
                                className={className}
                                onClick={() => handleCityClick(city.lat, city.lon)}
                                onMouseEnter={() => handleMouseEnter(index)}
                            >
                                <span>{city.name}</span>
                                <span>
                                    <span>{city.region}</span>
                                    <span>{city.country}</span>
                                </span>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Search;