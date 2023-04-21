import { useEffect } from 'react';
import Header from '../components/HomePage/Header';
import IconsRow from '../components/HomePage/IconsRow';
import ImagesSection from '../components/HomePage/ImagesSection';
import { ProvideText } from '../context/Languaje';
// eslint-disable-next-line no-unused-vars
import style from './HomePage.module.css';

const HomePage = ({ setMobile }) => {
	useEffect(() => {
		setMobile(false);
	}, []);
	return (
		<>
			<Header />
			<IconsRow />
			<ImagesSection
				img='homeImage1.webp'
				text={
					<ProvideText
						es='Obtén ejercicios por músculo'
						en='Get exercises by Muscle'
					/>
				}
			/>
			<ImagesSection
				img='homeImage2.svg'
				text={
					<ProvideText
						es='Obtén recomendaciones de menús'
						en='Get food recommendations'
					/>
				}
				reverse
			/>
		</>
	);
};

export default HomePage;
