import { useEffect, useState } from 'react';
import { fetchExercises } from '../../utils/services';
import ExerciseItem from './ExerciseItem';
import style from './ExercisesList.module.css';

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
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '90vh',
						width: '90vw'
					}}
				>
					<div className='lds-ring'>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			) : (
				exercises.data.map(exercise => {
					return <ExerciseItem key={exercise.id} exercise={exercise} />;
				})
			)}
		</ul>
	);
}

export default ExercisesList;
