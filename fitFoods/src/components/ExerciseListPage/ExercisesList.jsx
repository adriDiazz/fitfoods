import { useEffect, useState } from 'react';
import { fetchExercises, findSteps } from '../../utils/services';
import ExerciseItem from './ExerciseItem';
import style from './ExercisesList.module.css';

// eslint-disable-next-line react/prop-types
function ExercisesList({ muscleId }) {
	const [exercises, setExercises] = useState({
		loading: true,
		data: [],
		error: null
	});

	const [steps, setSteps] = useState({
		loading: true,
		data: [],
		error: null
	});

	const [selectedExercise, setSelectedExercise] = useState(null);

	const [selectedSteps, setSelectedSteps] = useState(null);

	const handleExerciseClick = exercise => {
		setSelectedExercise(exercise);
	};

	useEffect(() => {
		fetchExercises(muscleId, setExercises);
	}, [muscleId]);

	useEffect(() => {
		findSteps(handleExerciseClick.id, setSteps);
	});

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
							onClick={() => handleExerciseClick(exercise)}
						/>
					);
				})
			)}
			{selectedExercise && (
				<>
					<div
						className={style.overlay}
						onClick={() => setSelectedExercise(null)}
					></div>
					<div className={style.modal}>
						<button onClick={() => setSelectedExercise(null)}>X</button>
						<h1>{selectedExercise.name}</h1>
						<span>{selectedExercise.difficulty}</span>
						<div className={style.steps}>{selectedSteps.descripcion}STEPS:</div>
						<video src={selectedExercise.url}></video>
					</div>
				</>
			)}
		</ul>
	);
}

export default ExercisesList;
