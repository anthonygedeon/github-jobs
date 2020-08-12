import React from 'react';
import SearchLocation from '../SearchLocation/index';
import AvailableJobs from '../AvailableJobs/index';
import Checkbox from '../Checkbox/index';
import './styles.scss';

const Content = () => {

    return (
        <div className="content">
            <div className="content__left">
                <Checkbox name="Full-time"/>
                <SearchLocation />
                <Checkbox name="London"/>
                <Checkbox name="Amsterdam"/>
                <Checkbox name="New York"/>
                <Checkbox name="Berlin"/>
            </div>
            <div className="content__right">
                <AvailableJobs />
            </div>
        </div>
    );

};

export default Content;