import React, { useState } from 'react';

const JobPostsContext = React.createContext();

const JobPostsProvider = (props) => {

    const [jobs, setJobs] = useState(null);

    return (
        <JobPostsContext.Provider value={{
            company: jobs,
            updateState: (items) => {
                setJobs(items);
            }
        }}>
            {props.children}
        </JobPostsContext.Provider>
    );

}

export {
    JobPostsProvider,
    JobPostsContext
}