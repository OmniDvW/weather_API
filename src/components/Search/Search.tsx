import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults } from '../../store/thunks/weatherThunks';
import { AppStore, AppDispatch } from '../../store/store';

const Search: React.FC = () => {
    const [searchText, setSearchText] = useState('');
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
    };

    return (
        <div>
            <input type="text" value={searchText} onChange={handleSearchInputChange} />
            {searchResults && Object.keys(searchResults).length > 0 && Object.keys(searchResults).map((key: string) => {
                const city = searchResults[key];
                return <div key={city.url}>{city.name}</div>;
            })}
        </div>
    );
};

export default Search;