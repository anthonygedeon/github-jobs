import React from 'react';
import PublicIcon from '@material-ui/icons/Public';
import './styles.scss';

const SearchLocation = () => {

    return (
        <div className="search-location">
            <h2 className="search-location__heading">Location</h2>
            <div className="area">
                <PublicIcon />
                <input 
                    type="text" 
                    className="area__input" 
                    placeholder="City, state, zip code or country" 
                />
            </div>
        </div>
    );

};

export default SearchLocation;