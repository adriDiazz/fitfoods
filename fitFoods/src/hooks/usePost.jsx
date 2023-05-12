import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';

export const usePost = (url, body) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const { userToken } = useUser();

	useEffect(() => {
		setLoading(true);

		fetch(url, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${userToken}`,
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(body)
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
	}, []);

	return { data, loading, error };
};
