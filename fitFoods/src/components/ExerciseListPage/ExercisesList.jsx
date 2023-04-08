import { useEffect, useState } from 'react';
import { fetchExercises } from '../../utils/services';
import ExerciseItem from './ExerciseItem';
import style from './ExercisesList.module.css';

// eslint-disable-next-line react/prop-types
function ExercisesList({ muscleId }) {
	const [exercises, setExercises] = useState({
		loading: true,
		data: []
	});

	useEffect(() => {
		fetchExercises(muscleId, setExercises);
	}, [muscleId]);

	return (
		<ul className={style.wrapper}>
			{exercises.loading
				? 'Loading...'
				: exercises.data.map(exercise => {
						return <ExerciseItem key={exercise.id} exercise={exercise} />;
				  })}
		</ul>
	);
}

export default ExercisesList;
