import { useEffect, useState } from 'react';
import CommentsPie from './CommentsPie';
import { fetchComments } from '../../utils/services';

const Comments = () => {
    const [value, setValue] = useState(null);
	const [loading, setLoading] = useState(false);
	const [comments, setComments] = useState();
	const [sentiments, setSentiments] = useState();
    useEffect(() => {
		setLoading(true);
		fetchComments(value, setComments);
		setLoading(true);
	}, [value]);

	useEffect(() => {
		setLoading(false);
		let negatives = 0;
		let positives = 0;
		console.log(comments);
		if (comments) {
			console.log(comments.data[0]);
			comments.data[0].forEach(comentario => {
				comentario.sentiment < 0 ? negatives++ : positives++;
			});
			setSentiments([
				{ name: 'Positives', qty: positives },
				{ name: 'Negatives', qty: negatives }
			]);
		}
	}, [comments]);
	return (
		<div>
			<h2 style={{ color: 'white' }}>Sentiment analysis for each muscle</h2>
			<h2 style={{ color: 'white' }}>Select muscle ID:</h2>
			<select
				name='comments'
				id='comments'
				onChange={e => {
					setValue(e.target.value);
				}}
			>
				{Array.from({ length: 50 }, (_, i) => (
					<option key={i + 1} value={i + 1}>
						{i + 1}
					</option>
				))}
			</select>

			<CommentsPie comments={sentiments}></CommentsPie>
		</div>
	);
};

export default Comments;
