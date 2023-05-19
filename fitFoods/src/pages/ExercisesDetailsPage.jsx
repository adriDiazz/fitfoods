import { useLocation } from 'react-router-dom';
import styles from './ExercisesDetailsPage.module.css';
import Steps from '../components/ExerciseListPage/Steps';
import { fetchComments } from '../utils/services';
import { useState, useEffect } from 'react';

function ExercisesDetailsPage({ setMobile }) {
	const location = useLocation();
	const [comentarios, setComentarios] = useState([]);

	console.log(location.state);

	useEffect(() => {
		setMobile(false);
	}, []);

	useEffect(() => {
		fetchComments(location.state.exercise.id, setComentarios);
	}, []);

	console.log(comentarios.data);

	console.log(location.state.exercise.id);

	return (
		<div>
			<div className={styles.exercisecontainer}>
				<h1>{location.state.exercise.name}</h1>
				<Steps exerciseID={location.state.exercise.id} />
				<video
					preload='metadata'
					muted
					autoPlay
					loop
					src={location.state.exercise.url}
				>
					a
				</video>
				<hr className={styles.lineadivisoria}></hr>
			</div>
			<div className={styles.comentarioscontainer}>
				<h2 className={styles.txtComentarios}>Comentarios</h2>
				<ul>
					{comentarios.data &&
						comentarios.data.map((comentario, index) => (
							<li key={index} className={styles.lista}>
								{comentario.text}
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}

export default ExercisesDetailsPage;
