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

	const [selectedExercise, setSelectedExercise] = useState(null); // nuevo estado

	const handleExerciseClick = exercise => {
		setSelectedExercise(exercise);
	};

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
					return (
						<ExerciseItem
							key={exercise.id}
							exercise={exercise}
							onClick={() => handleExerciseClick(exercise)} // Pasamos la función handleExerciseClick como onClick
						/>
					);
				})
			)}
			{selectedExercise && (
				<div className={style.modal}>
					<div>{selectedExercise.name}</div>
					<div>{selectedExercise.difficulty}</div>
					<div>{selectedExercise.description}</div>
					<button onClick={() => setSelectedExercise(null)}>Close</button>
				</div>
			)}
		</ul>
	);
}

export default ExercisesList;
