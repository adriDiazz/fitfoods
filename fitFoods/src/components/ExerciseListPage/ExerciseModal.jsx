import style from './ExerciseModal.module.css';
// eslint-disable-next-line react/prop-types
const ExerciseModal = ({ exercise, steps }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.info}>
				<h1>{exercise.name}</h1>
				<span>{exercise.difficulty}</span>
				<ul className={style.list}>
					{steps.data.map(step => {
						return (
							<li key={step.id}>
								<h3>{step.name}</h3>
								<p>{step.description}</p>
							</li>
						);
					})}
				</ul>
				<video
					preload='metadata'
					muted
					autoPlay
					loop
					src={exercise.url}
				></video>
			</div>
		</div>
	);
};

export default ExerciseModal;
