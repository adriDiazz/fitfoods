import { useEffect, useState } from 'react';
import style from './TopMuscles.module.css';
import { fetchMuscles, fetchExercises } from '../../utils/services';

const getMuscleId = (topMuscles, currentMuscle) => {
	const muscleId = topMuscles.find(muscle => muscle.name === currentMuscle);
	console.log(muscleId);
	return muscleId;
};

// eslint-disable-next-line react/prop-types
function TopMuscles({ muscle: currentMuscle, setMuscleId }) {
	const [topMuscles, setTopMuscles] = useState({
		loading: true,
		data: []
	});

	const muscleId = getMuscleId(topMuscles.data, currentMuscle);
	console.log(muscleId);
	setMuscleId(muscleId?.id);

	useEffect(() => {
		fetchMuscles(setTopMuscles);
	}, []);

	const filteredMuscles = topMuscles.data.filter(
		muscle => muscle.name !== currentMuscle
	);
	const randomSixMuscles = filteredMuscles
		.sort(() => Math.random() - 0.5)
		.slice(0, 6);

	return (
		<ul className={style.wrapper}>
			{topMuscles.loading
				? 'Loading...'
				: randomSixMuscles.map(muscle => {
						return (
							<li key={muscle.id} className={style.item}>
								{muscle.name}
							</li>
						);
				  })}
		</ul>
	);
}

export default TopMuscles;
