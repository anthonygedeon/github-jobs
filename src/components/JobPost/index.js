import React, { useState, useEffect } from 'react';
import PublicIcon from '@material-ui/icons/Public';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import './styles.scss';

const JobPost = () => {



    return (
        <a href="/" className="job-post">
            <img src="https://picsum.photos/200/300" alt="Company brand" className="job-post__image"/>
            <div className="job-post__details">
                <div className="job-post__company">
                    <p className="job-post__company-name">Lev</p>
                    <h3 className="job-post__position">Senior Engineer</h3>
                    <button className="job-post__full-time">Full time</button>
                </div>
                <div className="job-post__posting">
                    <div className="job-post__location-wrapper">
                        <PublicIcon />
                        <p className="job-post__location">New York</p>
                    </div>
                    <div className="job-post__timestamp-wrapper">
                        <QueryBuilderIcon />
                        <p className="job-post__timestamp">5 days ago</p>
                    </div>
                </div>
            </div>
        </a>
    )

}

export default JobPost;