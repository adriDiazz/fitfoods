export const fetchMuscles = async setTopMuscles => {
	const response = await fetch('http://127.0.0.1:8000/api/muscles');
	const data = await response.json();
	setTopMuscles({ loading: false, data });
};

export const fetchExercises = async (muscleId, setExercises) => {
	const response = await fetch(
		`http://127.0.0.1:8000/api/exercises/${muscleId}`
	);
	const data = await response.json();
	setExercises({ loading: false, data });
};
