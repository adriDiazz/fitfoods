import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSteps } from '../utils/services';
import './ExercisesDetailsPage.module.css';
import Steps from '../components/ExerciseListPage/Steps';

function ExercisesDetailsPage({ setMobile }) {
	const location = useLocation();
	console.log(location.state.exercise);

	useEffect(() => {
		setMobile(false);
	}, []);

	console.log(location.state.exercise.id);

	return (
		<div>
			<h1>{location.state.exercise.name}</h1>
			<h2>{location.state.exercise.id}</h2>
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
		</div>
	);
}

export default ExercisesDetailsPage;
