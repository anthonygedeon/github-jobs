import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PublicIcon from '@material-ui/icons/Public';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import './styles.scss';

const JobPost = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://jobs.github.com/positions.json', {
			headers: {
				accept:
					'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
				'accept-language': 'en-US,en;q=0.9,la;q=0.8,fr;q=0.7',
				'cache-control': 'max-age=0',
				'if-none-match': 'W/"202312b4118c4ee41e95fad2bdc606bb"',
				'sec-fetch-dest': 'document',
				'sec-fetch-mode': 'navigate',
				'sec-fetch-site': 'none',
				'sec-fetch-user': '?1',
				'upgrade-insecure-requests': '1',
			},
			referrerPolicy: 'no-referrer-when-downgrade',
			body: null,
			method: 'GET',
			mode: 'no-cors',
			credentials: 'include',
		})
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
		return (
			<Link to="/" className="job-post">
				<img src="" alt="Company brand" className="job-post__image" />
				<div className="job-post__details">
					<div className="job-post__company">
						<p className="job-post__company-name">Lev</p>
						<h3 className="job-post__position">Senior Engineer</h3>
						<button className="job-post__full-time">
							Full time
						</button>
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
			</Link>
		);
	}
};

export default JobPost;
