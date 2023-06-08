import { fetchWithToken } from './fetchInterceptor';

export const getAllExecisesbyMuscleId = async setEjercicios => {
	try {
		const response = await fetchWithToken(
			'http://127.0.0.1:8000/api/dashboard',
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const data = await response.json();

		setEjercicios({ loading: false, data });
	} catch (err) {
		console.log(err);
		setEjercicios({ loading: false, error: err, data: [] });
	}
};

export const fetchMuscles = async setTopMuscles => {
	try {
		const response = await fetchWithToken('http://127.0.0.1:8000/api/muscles', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();

		setTopMuscles({ loading: false, data });
	} catch (err) {
		console.log(err);
		setTopMuscles({ loading: false, error: err, data: [] });
	}
};

export const fetchExercises = async (muscleId, setExercises) => {
	try {
		const response = await fetchWithToken(
			`http://127.0.0.1:8000/api/exercises/${muscleId}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const data = await response.json();
		setExercises({ loading: false, data });
	} catch (err) {
		setExercises({ loading: false, error: err, data: [] });
	}
};

export const fetchComments = async (exerciseId, setComments) => {
	try {
		const response = await fetchWithToken(
			`http://127.0.0.1:8000/api/exercises/comments/${exerciseId}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const data = await response.json();
		setComments({ loading: false, data });
	} catch (err) {
		setComments({ loading: false, error: err, data: [] });
	}
};

export const fetchSteps = async (exerciseId, setSteps) => {
	try {
		const response = await fetchWithToken(
			`http://127.0.0.1:8000/api/exercises/steps/${exerciseId}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const data = await response.json();
		setSteps({ loading: false, data });
	} catch (err) {
		setSteps({ loading: false, error: err, data: [] });
	}
};

export const fetchFood = async setFood => {
	try {
		// const response = await fetch('http://127.0.0.1:8000/api/food');
		const response = await fetchWithToken('http://127.0.0.1:8000/api/food', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();

		setFood({ loading: false, data });
	} catch (err) {
		console.log(err);
		setFood({ loading: false, error: err, data: [] });
	}
};

export const addMenu = async data => {
	try {
		const response = await fetchWithToken('http://127.0.0.1:8000/api/addmenu', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const result = await response.json();
	} catch (error) {
		console.error('Error:', error);
	}
};

export const classifyRecipe = async (data, setRecipeCategory, setIsLoading) => {
	try {
		const response = await fetchWithToken(
			'http://127.0.0.1:8000/api/classify',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}
		);

		const result = await response.json();

		if (
			result.pred !== 'Carnes, pescados y verduras' &&
			result.pred !== 'Cereales y derivados' &&
			result.pred !== 'Leche, huevo y derivados' &&
			result.pred !== 'Legumbres'
		) {
			result.pred = 'Error. Try again';
		}
		setIsLoading(false);
		setRecipeCategory(result.pred);
	} catch (error) {
		console.error('Error:', error);
	}
};

export const login = async (data, setError) => {
	try {
		const response = await fetchWithToken('http://127.0.0.1:8000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const result = await response.json();

		if (result.error) {
			setError(result.error);
		} else {
			setError('success');
		}

		return result.token;
	} catch (error) {
		setError(error.message);
	}
};

export const register = async (data, setError) => {
	try {
		const response = await fetchWithToken(
			'http://127.0.0.1:8000/api/register',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}
		);

		const result = await response.json();

		if (result.error) {
			setError(result.error);
		} else {
			setError('success');
		}

		return result.token;
	} catch (error) {
		setError(error.message);
	}
};

export const logOut = async () => {
	try {
		const response = await fetchWithToken('http://127.0.0.1:8000/api/logout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const result = await response.json();

		return result;
	} catch (error) {
		console.error('Error:', error);
	}
};

export const fetchAllExercises = async setExercises => {
	try {
		// const response = await fetch('http://127.0.0.1:8000/api/food');
		const response = await fetchWithToken(
			'http://127.0.0.1:8000/api/exercises',
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const data = await response.json();

		setExercises({ loading: false, data });
	} catch (err) {
		console.log(err);
		setExercises({ loading: false, error: err, data: [] });
	}
};

export const fetchAllComments = async setComments => {
	try {
		// const response = await fetch('http://127.0.0.1:8000/api/food');
		const response = await fetchWithToken(
			'http://127.0.0.1:8000/api/comments',
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const data = await response.json();

		setComments({ loading: false, data });
	} catch (err) {
		console.log(err);
		setComments({ loading: false, error: err, data: [] });
	}
};

export const getAllMenus = async (data, setMenus) => {
	try {
		const response = await fetchWithToken(
			'http://127.0.0.1:8000/api/getmenus',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}
		);

		const result = await response.json();
		setMenus(result);
	} catch (error) {
		console.error('Error:', error);
		setMenus(error);
	}
};
