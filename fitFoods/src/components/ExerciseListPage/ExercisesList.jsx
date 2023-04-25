import { useEffect, useState } from 'react';
import { fetchExercises, fetchSteps } from '../../utils/services';
import ExerciseItem from './ExerciseItem';
import style from './ExercisesList.module.css';
import ModalComponent from '../UI/ModalComponent';
import ExerciseModal from './ExerciseModal';

// eslint-disable-next-line react/prop-types
function ExercisesList({ muscleId }) {
	const [open, setOpen] = useState({
		opened: false,
		exercise: null
	});
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

	console.log(muscleId);

	useEffect(() => {
		fetchExercises(muscleId, setExercises);
	}, [muscleId]);

	useEffect(() => {
		if (open.opened) {
			fetchSteps(open.exercise.id, setSteps);
		}
	}, [open.exercise]);

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
							onClick={() => {
								setOpen({
									opened: true,
									exercise
								});
							}}
						/>
					);
				})
			)}
			{open.opened && (
				<ModalComponent opened={open} setOpened={setOpen}>
					<ExerciseModal
						exercise={open.exercise}
						steps={steps}
						loading={steps.loading}
					/>
				</ModalComponent>
			)}
			{/* {selectedExercise && (
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
			)} */}
		</ul>
	);
}

export default ExercisesList;
