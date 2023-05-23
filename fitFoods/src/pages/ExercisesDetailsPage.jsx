import { useLocation } from 'react-router-dom';
import styles from './ExercisesDetailsPage.module.css';
import Steps from '../components/ExerciseListPage/Steps';
import { useEffect } from 'react';
import Loader from '../components/UI/Loader';
import { useFetch } from '../hooks/useFetch';

function ExercisesDetailsPage({ setMobile }) {
	const location = useLocation();
	const url = import.meta.env.VITE_COMMENTS_URL + location.state.exercise.id;
	const { data, loading, error } = useFetch(url, true);

	useEffect(() => {
		setMobile(false);
	}, []);

	console.log(url);

	return (
		<div
			style={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			{error && <div>Error: {error}</div>}
			{loading ? (
				<Loader />
			) : (
				<>
					<div className={styles.exercisecontainer}>
						<h1>{location.state.exercise.name}</h1>
						<video
							preload='metadata'
							muted
							autoPlay
							loop
							src={location.state.exercise.url}
						>
							a
						</video>
						<Steps exerciseID={location.state.exercise.id} />
						<hr className={styles.lineadivisoria}></hr>
					</div>
					<div className={styles.comentarioscontainer}>
						<h2 className={styles.txtComentarios}>Comentarios</h2>
						<ul className={styles.commentWrapper}>
							{data &&
								data[0].map((comentario, index) => (
									<li key={index} className={styles.lista}>
										<div className={styles.commentItem}>
											<div className={styles.username}>
												<span>{data[1][index][0].username}</span>
												<span>
													{new Date(comentario.created_at).getDate()}/
													{new Date(comentario.created_at).getMonth() + 1}
													{'->'}
													{new Date(comentario.created_at).getHours()}:
													{new Date(comentario.created_at).getMinutes()}
												</span>
											</div>
											{comentario.text}
										</div>
									</li>
								))}
						</ul>
					</div>
				</>
			)}
		</div>
	);
}

export default ExercisesDetailsPage;
