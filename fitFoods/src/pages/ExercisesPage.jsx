import { useEffect } from 'react';
import BackBody from '../components/UI/BackBody';
import FrontBody from '../components/UI/FrontBody';
import style from './Exercises.module.css';

const ExercisesPage = ({ setMobile }) => {
	useEffect(() => {
		setMobile(false);
	}, []);
	return (
		<div className={style.wrapper}>
			<FrontBody />
			<BackBody />
		</div>
	);
};

export default ExercisesPage;
