import React, { useState } from 'react';
import { JobPostsContext } from '../providers/JobPostsContext';

const JobContent = ({ match }) => {

    return (
        <JobPostsContext.Consumer>
            {(context) => {
                const job = context.company.filter(job => job.id === match.params.job)
                console.log(job.how_to_apply, job.description)
            }}
        </JobPostsContext.Consumer>
    )
};

export default JobContent;