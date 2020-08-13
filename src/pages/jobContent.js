import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { JobPostsContext } from '../providers/JobPostsContext';

const JobContent = ({ match }) => {

    return (
        <JobPostsContext.Consumer>
            {(context) => {
                const [ job ] = context.company.filter(job => job.id === match.params.job)
                console.log(job)

                return (
                    <div className="job-content">
                        <Link to="/"><button>Back</button></Link>
                        <img src={job.company_logo} alt=""/>
                        <p>{job.type}</p>
                        <p>{job.title}</p>
                        <p>{job.how_to_apply}</p>
                        <p>{job.location}</p>
                        {job.description}
                    </div>
                );
            }}
        </JobPostsContext.Consumer>
    )
};

export default JobContent;