import Button from '../UI/Button';
import style from './ExerciseItem.module.css';
// eslint-disable-next-line react/prop-types
const ExerciseItem = ({ exercise, onClick }) => {
	return (
		<li className={style.card}>
			<div className={style.container}>
				{exercise.url === 'None' ? (
					<img src='no-image.jpeg' alt='noImage avaible' />
				) : (
					<video src={exercise.url}></video>
				)}
				{/* <video src={exercise.url}></video> */}
				<div className=''>
					<h3>{exercise.name}</h3>
					<p>{exercise.difficulty}</p>
				</div>
			</div>

			<div className={style.btnWrapper}>
				<Button onClick={onClick} className={style.btn}>
					Show more
				</Button>
			</div>
		</li>
	);
};

export default ExerciseItem;
