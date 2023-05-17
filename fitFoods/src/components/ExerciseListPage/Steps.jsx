import { useEffect, useState } from 'react';
import { fetchSteps } from '../../utils/services';

const Steps = ({ exerciseID }) => {
	const [steps, setSteps] = useState(null);

	useEffect(() => {
		fetchSteps(exerciseID, setSteps);
	}, []);
	console.log(steps);

	return (
		<div>
			<div>
				{steps && steps.length > 0 && (
					<ul>
						{steps.data[0].description
							.split('.')
							.filter(sentence => sentence.trim() !== '')
							.map((sentence, index) => (
								<li key={index}>
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
