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
			`http://127.0.0.1:8000/api/steps/${exerciseId}`
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
