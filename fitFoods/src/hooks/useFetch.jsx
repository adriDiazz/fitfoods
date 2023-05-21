import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';

export function useFetch(url, isClicked) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const { userToken } = useUser();

	useEffect(() => {
		setLoading(true);

		if (isClicked) {
			fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${userToken}`
				}
			})
				.then(res => res.json())
				.then(data => {
					setData(data);
					setLoading(false);
				})
				.catch(error => {
					setError(error);
					setLoading(false);
				});
		}
	}, [url, userToken, isClicked]);

	return { data, loading, error };
}
