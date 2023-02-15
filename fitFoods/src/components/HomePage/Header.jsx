import style from './Header.module.css';

const Header = () => {
	return (
		<header>
			<div className={style.header}>
				<div className={style.colIzq}>
					<h1>
						<span className={style.green}>Train</span> and{' '}
						<span className={style.green}>Eat</span> like your favourite athlete
					</h1>
					<div className={style.social}>
						<div className={style.info}>
							<h2>Any Queries? Visit us on</h2>

							<p>www.fitfoods.com</p>
							<div className={style.logos}>
								<img src='instagram.svg' alt='' />
								<img src='twitter.svg' alt='' />
								<img src='facebook.svg' alt='' />
							</div>
						</div>
					</div>
				</div>
				<img src='imgHeader.svg' alt='' />
			</div>
		</header>
	);
};

export default Header;
