import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';

export function useFetch(url) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const { userToken } = useUser();

	useEffect(() => {
		setLoading(true);

		fetch(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${userToken}`,
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
			.then(response => response.json())
			.then(data => {
				setData(data);
				setLoading(false);
			})
			.catch(error => {
				setError(error);
				setLoading(false);
			});
	}, [url, userToken]);

	return { data, loading, error };
}
