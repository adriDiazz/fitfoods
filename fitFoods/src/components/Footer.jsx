import styles from './Footer.module.css';

const Footer = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<img src='logo.svg' alt='fitfoods' />
				<div className={styles.social}>
					<div className={styles.rectangle}></div>
					<div>
						<p>
							Any Queries? Visit us in <br />
						</p>
						<a href='#'>www.fitfoods.com</a>
					</div>
					<div className={styles.logos}>
						<img src='instagram.svg' alt='' />
						<img src='twitter.svg' alt='' />
						<img src='facebook.svg' alt='' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
