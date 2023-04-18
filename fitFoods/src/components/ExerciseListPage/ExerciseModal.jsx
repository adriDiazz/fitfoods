import { useEffect, useState } from 'react';
import style from './ExerciseModal.module.css';
// eslint-disable-next-line react/prop-types
const ExerciseModal = ({ exercise, steps }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	return (
		<div className={style.wrapper}>
			<div className={style.info}>
				<h1>{exercise.name}</h1>
				<span>{exercise.difficulty}</span>
				<ul className={style.list}>
					{steps.data.slice(0, 1).map((step, stepIndex) => {
						return (
							<li key={step.id} className={style.step}>
								<p>{step.name}</p>
								<p>
									{step.description
										.split('.')
										.filter(sentence => sentence.trim() !== '')
										.map((sentence, index) => {
											return (
												<p key={index}>
													{index + 1}- {sentence.trim()}
												</p>
											);
										})}
								</p>
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
