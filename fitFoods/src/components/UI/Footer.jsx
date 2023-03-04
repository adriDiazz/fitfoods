import Logo from './Icons/Logo';
import styles from './Footer.module.css';
import { ProvideText } from '../../context/Languaje';

const Footer = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<Logo />
				<div className={styles.social}>
					<div className={styles.rectangle}></div>
					<div className={styles.info}>
						<h2>
							<ProvideText
								es='¿Alguna pregunta? Visítanos en:'
								en='Any Queries? Visit us on'
							/>
						</h2>

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
