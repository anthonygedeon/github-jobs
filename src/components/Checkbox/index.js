import React from 'react';
import './styles.scss';

const Checkbox = (props) => {

    return (
        <div className="checkboxes">
            <input type="checkbox" className="checkboxes__box"/>
            <p className="checkboxes__text">{props.name}</p>
        </div>
    );
    
};

export default Checkbox;