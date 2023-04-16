import { useEffect, useState } from 'react';
import style from './TopMuscles.module.css';
import { fetchMuscles } from '../../utils/services';
import { useNavigate } from 'react-router-dom';

const getMuscleId = (topMuscles, currentMuscle) => {
	const muscleId = topMuscles.find(muscle => muscle.name === currentMuscle);
	return muscleId;
};

// eslint-disable-next-line react/prop-types
function TopMuscles({ muscle: currentMuscle, setMuscleId }) {
	const [topMuscles, setTopMuscles] = useState({
		loading: true,
		data: [],
		error: null
	});

	const muscleId = getMuscleId(topMuscles.data, currentMuscle);

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

	if (topMuscles.error) {
		return <div>Error: {topMuscles.error.message}</div>;
	}

	return (
		<ul className={style.wrapper}>
			{topMuscles.loading
				? 'Loading...'
				: randomSixMuscles.map(muscle => {
						return (
							<li
								onClick={() => window.location.replace(muscle.name)}
								key={muscle.id}
								className={style.item}
							>
								{muscle.name}
							</li>
						);
				  })}
		</ul>
	);
}

export default TopMuscles;
