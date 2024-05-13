import React from 'react'
import SearchCategoryList from '../../components/Modules/Search/SearchCategory/SearchCategoryList/SearchCategoryList'
import classes from './Search.module.css';

const Search = () => {
    return (
        <>
            <SearchCategoryList />
            <div className={`${classes['search-copyright']} copyright-info copyright`}>
                <span>&copy; 2024. All rights reserved.</span>
                <span>Developed by Vaishali</span>
            </div>
        </>
    )
}

export default Search