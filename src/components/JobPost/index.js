import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PublicIcon from '@material-ui/icons/Public';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import './styles.scss';

const JobPost = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(
			'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
		)
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
				},

				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	console.log(items);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		// eslint-disable-next-line no-lone-blocks
		return (
			<Fragment>
				{items.map((item) => {
					console.log(item);
					return (
						<Link to={item.id} className="job-post">
							<img
								src={item.company_logo}
								alt="Company brand"
								className="job-post__image"
							/>
							<div className="job-post__details">
								<div className="job-post__company">
									<p className="job-post__company-name">
										{item.company}
									</p>
									<h3 className="job-post__position">
										{item.title}
									</h3>
									<button className="job-post__full-time">
										{item.type}
									</button>
								</div>
								<div className="job-post__posting">
									<div className="job-post__location-wrapper">
										<PublicIcon />
										<p className="job-post__location">
											{item.location}
										</p>
									</div>
									<div className="job-post__timestamp-wrapper">
										<QueryBuilderIcon />
										<p className="job-post__timestamp">
											{new Intl.RelativeTimeFormat('en', { style: 'narrow' }).format(-1 * new Date(item.created_at).getDay(),'day')}
										</p>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
			</Fragment>
		);
	}
};

export default JobPost;
