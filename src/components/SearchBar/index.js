import React, { useState } from 'react';
import './styles.scss';
import WorkOutlineIcon from '@material-ui/icons/WorkOutlined';

const SearchBar = () => {

    return (
        <div className="search-bar">
            <div className="search">
                <WorkOutlineIcon />
                <input 
                    type="text" 
                    className="search__input" 
                    placeholder="Title, companies, expertise or benefits" />
                <button className="button button--primary">Search</button>
            </div>
        </div>
    )
};

export default SearchBar; // will use debounce