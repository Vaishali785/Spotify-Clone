import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from './Search.module.css';
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from 'react-router-dom';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        const checkQueryExists = pathname.split("/");
        const query = checkQueryExists.length > 2 ? checkQueryExists[2] : '';
        if (inputValue == '' && query) {
            setInputValue(query);
        }
    }, [pathname, inputValue])

    const handleSearchQuery = (e) => {
        setInputValue(e.target.value);
        navigate(`/search/${e.target.value}`);
    }

    return (
        <div className={classes["search-block"]}>
            <input
                type="text"
                className={classes['search-input']}
                placeholder='What do you want to listen to?'
                autoFocus
                onChange={handleSearchQuery}
                value={inputValue}
            />
            <SearchIcon className={classes['search-btn']} />
        </div>

    )
}

export default Search