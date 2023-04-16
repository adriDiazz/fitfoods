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
