import { useParams } from 'react-router-dom';
import style from './ExercisesListPage.module.css';
import TopMuscles from '../components/ExerciseListPage/TopMuscles';
import ArrowIcon from '../components/UI/Icons/ArrowIcon';
import { useState } from 'react';
import ExercisesList from '../components/ExerciseListPage/ExercisesList';

function ExercisesListPage() {
	const { muscle } = useParams();
	const [muscleId, setMuscleId] = useState(null);

	return (
		<div className={style.wrapper}>
			<div className={style.top}>
				<ArrowIcon onClick={() => window.history.back()} />
				<h3>
					exercises <span style={{ color: '#fff' }}>{'>'}</span> {muscle}
				</h3>
			</div>
			<TopMuscles muscle={muscle} setMuscleId={setMuscleId} />
			<ExercisesList muscleId={muscleId} />
		</div>
	);
}

export default ExercisesListPage;
