import styles from './Steps.module.css';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../UI/Loader';

const Steps = ({ exerciseID }) => {
	const url = import.meta.env.VITE_EXERCISE_STEPS_URL + exerciseID;
	const { data, loading, error } = useFetch(url, true);

	return (
		<div  style={{
			width: '100%',
		}}>
			{loading && <Loader />}

			{error && <div>Error: {error}</div>}
			<div style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',

			}}>
				{data.length > 0 && !loading && (
					<ul className={styles.stepsWrapper}>
						{data[0].description
							.split('.')
							.filter(sentence => sentence.trim() !== '')
							.map((sentence, index) => (
								<li key={index} className={styles.lista}>
									<div className={styles.stepItem}>
										<span className={styles.circle}>{index + 1}</span>
										<p>{sentence}</p>
									</div>
								</li>
							))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Steps;
