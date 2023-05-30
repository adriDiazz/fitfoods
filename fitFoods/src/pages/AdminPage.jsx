import style from './AdminPage.module.css';
import AdminNavBar from '../components/AdminPage/AdminNavBar';
import { useEffect, useState } from 'react';
import Dashboard from '../components/AdminPage/Dashboard';
import Loader from '../components/UI/Loader';
import CommentsPie from '../components/AdminPage/CommentsPie';
import { fetchComments } from '../utils/services';
const AdminPage = () => {
	const [page, setPage] = useState('dashboard');
	const [value, setValue] = useState(null);
	const [loading, setLoading] = useState(false);
	const [comments, setComments] = useState();
	const [sentiments, setSentiments] = useState();
	const url = import.meta.env.VITE_COMMENTS_URL;
	console.log(url);

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
		console.log(page);
	}, [comments]);
	return (
		<div className={style.wrapper}>
			<div className={style.infoWrapper}>
				<AdminNavBar setPage={setPage} page={page} />
				{page === 'dashboard' && <Dashboard />}
				{page === 'users' && <h1>Users</h1>}
				{page === 'comments' && <h1>HELLO</h1> && comments && (
					<div>
						<h2 style={{ color: 'white' }}>
							Sentiment analysis for each muscle
						</h2>
						<h2 style={{ color: 'white' }}>Select muscle ID:</h2>
						<select
							name='comments'
							id='comments'
							onChange={e => {
								console.log('A');
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
				)}
				{loading && <Loader></Loader>}
			</div>
		</div>
	);
};

export default AdminPage;
