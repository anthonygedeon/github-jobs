import React, { useState } from 'react';
import Header from '../components/Header/index';
import Content from '../components/Content/index';


const Home = () => {
	return (
        <div className="App">
            <div className="container">
                <Header />
                <Content />
            </div>
        </div>	
	);
};

export default Home;
