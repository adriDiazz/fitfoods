import { useEffect, useState } from 'react';
import style from './TopMuscles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useFetch } from '../../hooks/useFetch';
import { getMuscleId } from '../../utils/utils';

import 'swiper/css';
import 'swiper/css/navigation';

// eslint-disable-next-line react/prop-types
function TopMuscles({ muscle: currentMuscle, setMuscleId }) {
	const [windowSize, setWindowSize] = useState(window.innerWidth);
	const { data, loading, error } = useFetch(import.meta.env.VITE_MUSCLES_URL);
	const muscleId = getMuscleId(data, currentMuscle);
	const filteredMuscles = data.filter(muscle => muscle.name !== currentMuscle);

	setMuscleId(muscleId?.id);

	useEffect(() => {
		const handleResize = () => {
			setWindowSize(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<ul className={style.wrapper}>
			{loading ? (
				'Loading...'
			) : (
				<Swiper
					spaceBetween={50}
					slidesPerView={5}
					modules={[Navigation]}
					navigation={!(windowSize < 768)}
				>
					{filteredMuscles.map(muscle => {
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
