import styles from './Footer.module.css';

const Footer = () => {
	return (
		<>
			<Footer>
				<div className={styles.wrapper}>
					<img src='logo.svg' alt='fitfoods' />
					<div className='social'>
						<div className='text'>
							<p>
								Any Queries? Visit us in <br />
							</p>
							<a href='#'>www.fitfoods.com</a>
						</div>
						<div className='links'>
							<ul>
								<li>f</li>
							</ul>
						</div>
					</div>
				</div>
			</Footer>
		</>
	);
};

export default Footer;
