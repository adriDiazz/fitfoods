import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import style from './ExerciseItem.module.css';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line react/prop-types
const ExerciseItem = ({ exercise, onClick }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();

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
				<Button
					onClick={() => {
						navigate(`${location.pathname}/${exercise.id}`, {
							state: { exercise: exercise }
						});
					}}
					className={style.btn}
				>
					{t('components.exerciselistpage.exerciseitem.showmore')}
				</Button>
			</div>
		</li>
	);
};

export default ExerciseItem;
