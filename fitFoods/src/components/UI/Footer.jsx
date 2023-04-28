import Logo from './Icons/Logo';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className={styles.wrapper}>
				<Logo />
				<div className={styles.social}>
					<div className={styles.rectangle}></div>
					<div className={styles.info}>
						<h2>{t('components.homepage.header.query')}</h2>

						<p>www.fitfoods.com</p>
						<div className={styles.logos}>
							<img src='instagramDark.svg' alt='' />
							<img src='twitterDark.svg' alt='' />
							<img src='facebookDark.svg' alt='' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
