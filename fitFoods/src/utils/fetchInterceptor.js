export const fetchWithToken = async (url, options) => {
	const token = localStorage.getItem('token') || null;
	let response;
	if (token) {
		response = await fetch(url, {
			...options,
			headers: {
				...options.headers,
				Authorization: `Bearer ${token}`
			}
		});
	} else {
		response = await fetch(url, {
			...options,
			headers: {
				...options.headers
			}
		});
	}

	return response;
};
