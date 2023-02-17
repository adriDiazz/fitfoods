import Header from '../components/HomePage/Header';
import IconsRow from '../components/HomePage/IconsRow';
import ImagesSection from '../components/HomePage/ImagesSection';
import style from './HomePage.module.css';

const HomePage = () => {
	return (
		<>
			<Header />
			<IconsRow />
			<ImagesSection img='homeImage1.webp' text='Get exercises by Muscle' />
			<ImagesSection
				img='homeImage2.svg'
				text='Get food recommendations'
				reverse
			/>
		</>
	);
};

export default HomePage;
