import { useEffect, useState } from 'react';
import { fetchExercises } from '../../utils/services';
import ExerciseItem from './ExerciseItem';
import style from './ExercisesList.module.css';
import Loader from '../UI/Loader';

// eslint-disable-next-line react/prop-types
function ExercisesList({ muscleId }) {
	const [exercises, setExercises] = useState({
		loading: true,
		data: [],
		error: null
	});

	useEffect(() => {
		fetchExercises(muscleId, setExercises);
	}, [muscleId]);

	if (exercises.error) {
		return <div>Error: {exercises.error.message}</div>;
	}

	return (
		<ul className={style.wrapper}>
			{exercises.loading ? (
				<Loader />
			) : (
				exercises.data.map(exercise => {
					return <ExerciseItem key={exercise.id} exercise={exercise} />;
				})
			)}
		</ul>
	);
}

export default ExercisesList;
