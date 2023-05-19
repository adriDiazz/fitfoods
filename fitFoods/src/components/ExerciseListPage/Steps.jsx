import { useEffect, useState } from 'react';
import { fetchSteps } from '../../utils/services';
import styles from './Steps.module.css';

const Steps = ({ exerciseID }) => {
	const [steps, setSteps] = useState([]);

	useEffect(() => {
		fetchSteps(exerciseID, setSteps);
		console.log(exerciseID);
	}, []);

	return (
		<div>
			<div>
				{steps.data && (
					<ul>
						{steps.data[0].description
							.split('.')
							.filter(sentence => sentence.trim() !== '')
							.map((sentence, index) => (
								<li key={index} className={styles.lista}>
									{index + 1}- {sentence.trim()}
								</li>
							))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Steps;
