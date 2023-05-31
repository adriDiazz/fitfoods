import style from './Comments.module.css';

import { useEffect, useState } from 'react';
import CommentsPie from './CommentsPie';
import { fetchAllComments, fetchAllExercises } from '../../utils/services';

const Comments = () => {
	const [sentiments, setSentiments] = useState();
	const [exercises, setExercises] = useState();
	const [allComments, setAllComments] = useState();
	useEffect(() => {
		fetchAllExercises(setExercises);
		fetchAllComments(setAllComments);
	}, []);

	useEffect(() => {
		const positives = {};
		const negatives = {};
		allComments?.data.forEach(com => {
			if (com.exercise_id in positives === false) {
				positives[com.exercise_id] = 0;
			}
			if (com.exercise_id in negatives === false) {
				negatives[com.exercise_id] = 0;
			}
			if (com.sentiment >= 0) {
				positives[com.exercise_id] += 1;
			} else {
				negatives[com.exercise_id] += 1;
			}
		});
		const sentimentsArr = [];
		let charData = {};
		let length = Object.keys(positives).length;
		while (length > 0) {
			const exerciseName = exercises?.data[length - 1].name;
			charData = [
				{ name: 'Positives', qty: positives[length - 1] },
				{ name: 'Negatives', qty: negatives[length - 1] }
			];
			sentimentsArr.push({ title: exerciseName, data: charData });
			length--;
		}

		setSentiments(sentimentsArr);
	}, [allComments]);
	return (
		<div>
			<div className={style.wrapper}>
				{sentiments &&
					sentiments.map((sen, index) => (
						<CommentsPie key={index} comments={sen} />
					))}
			</div>
		</div>
	);
};

export default Comments;
