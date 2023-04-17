import { useEffect, useState } from 'react';
import style from './TopMuscles.module.css';
import { fetchMuscles } from '../../utils/services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

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
	const [windowSize, setWindowSize] = useState(window.innerWidth);

	const muscleId = getMuscleId(topMuscles.data, currentMuscle);

	setMuscleId(muscleId?.id);

	useEffect(() => {
		fetchMuscles(setTopMuscles);

		const handleResize = () => {
			setWindowSize(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
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
			{topMuscles.loading ? (
				'Loading...'
			) : (
				<Swiper
					spaceBetween={50}
					slidesPerView={5}
					modules={[Navigation]}
					navigation={!(windowSize < 768)}
				>
					{randomSixMuscles.map(muscle => {
						return (
							<SwiperSlide key={muscle.id}>
								<li
									onClick={() => window.location.replace(muscle.name)}
									key={muscle.id}
									className={style.item}
								>
									{muscle.name}
								</li>
							</SwiperSlide>
						);
					})}
				</Swiper>
			)}
		</ul>
	);
}

export default TopMuscles;
