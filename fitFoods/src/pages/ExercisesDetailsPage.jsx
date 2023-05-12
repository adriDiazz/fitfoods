import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ExercisesDetailsPage({ setMobile }) {
	const { muscle, exercise } = useParams();
	const [exerciseId, setExerciseId] = useState(null);
	const [muscleName, setMuscleName] = useState(null);
	const location = useLocation();
	console.log(location.state.exercise);

	useEffect(() => {
		setMobile(false);
	}, []);

	useEffect(() => {
		setExerciseId(exercise);
		setMuscleName(muscle);
	}, [exercise]);

	return (
		<div>
			<h1>{exerciseId}</h1>
			<h2>{muscleName}</h2>
		</div>
	);
}

export default ExercisesDetailsPage;
