import { useEffect } from 'react';
import Header from '../components/HomePage/Header';
import IconsRow from '../components/HomePage/IconsRow';
import ImagesSection from '../components/HomePage/ImagesSection';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line no-unused-vars
import style from './HomePage.module.css';

const HomePage = ({ setMobile }) => {
	const { t } = useTranslation();
	useEffect(() => {
		setMobile(false);
	}, []);
	return (
		<>
			<Header />
			<IconsRow />
			<ImagesSection
				img='homeImage1.webp'
				text={t('components.homepage.page.bymuscle')}
			/>
			<ImagesSection
				img='homeImage2.svg'
				text={t('components.homepage.page.menu')}
				reverse
			/>
		</>
	);
};

export default HomePage;
