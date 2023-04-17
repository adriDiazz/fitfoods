export const fetchMuscles = async setTopMuscles => {
	try {
		const response = await fetch('http://127.0.0.1:8000/api/muscles');
		const data = await response.json();
		console.log(data);
		setTopMuscles({ loading: false, data });
	} catch (err) {
		console.log(err);
		setTopMuscles({ loading: false, error: err, data: [] });
	}
};

export const fetchExercises = async (muscleId, setExercises) => {
	try {
		const response = await fetch(
			`http://127.0.0.1:8000/api/exercises/${muscleId}`
		);
		const data = await response.json();
		setExercises({ loading: false, data });
	} catch (err) {
		setExercises({ loading: false, error: err, data: [] });
	}
};

export const findSteps = async (exerciseId, setSteps) => {
	try {
		const response = await fetch(
			`http://127.0.0.1:8000/api/exercises/steps/${exerciseId}`
		);
		const data = await response.json();
		setSteps({ loading: false, data });
	} catch (err) {
		setSteps({ loading: false, error: err, data: [] });
	}
};

export const fetchFood = async setFood => {
	try {
		const response = await fetch('http://127.0.0.1:8000/api/food');
		const data = await response.json();
		console.log(data);
		setFood({ loading: false, data });
	} catch (err) {
		console.log(err);
		setFood({ loading: false, error: err, data: [] });
	}
};

export const addMenu = async data => {
	try {
		const response = await fetch('http://127.0.0.1:8000/api/addmenu', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const result = await response.json();
		console.log('Success:', result);
	} catch (error) {
		console.error('Error:', error);
	}
};
