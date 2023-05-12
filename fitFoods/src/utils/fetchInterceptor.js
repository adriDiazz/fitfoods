export const fetchWithToken = async (url, options) => {
	const token = localStorage.getItem('token');
	const response = await fetch(url, {
		...options,
		headers: {
			...options.headers,
			Authorization: `Bearer ${token}`
		}
	});
	return response;
};
