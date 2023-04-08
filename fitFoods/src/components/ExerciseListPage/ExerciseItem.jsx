import Button from '../UI/Button';
import ExerciseMedia from '../UI/ExerciseMedia';
import style from './ExerciseItem.module.css';
// eslint-disable-next-line react/prop-types
const ExerciseItem = ({ exercise }) => {
	console.log(exercise);
	return (
		<li className={style.card}>
			<div className={style.container}>
				<video src={exercise.url}></video>
				<div className=''>
					<h3>{exercise.name}</h3>
					<p>{exercise.difficulty}</p>
				</div>
			</div>

			<div className={style.btnWrapper}>
				<Button>Save to routine</Button>
			</div>
		</li>
	);
};

export default ExerciseItem;
