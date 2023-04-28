import style from './Header.module.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
	const { t } = useTranslation();
	return (
		<header>
			<div className={style.header}>
				<div className={style.colIzq}>
					<h1>
						<span className={style.green}>
							{t('components.homepage.header.train')}
						</span>{' '}
						{t('components.homepage.header.and')}
						<span className={style.green}>
							{' '}
							{t('components.homepage.header.eat')}
						</span>{' '}
						{t('components.homepage.header.athlete')}
					</h1>
					<div className={style.social}>
						<div className={style.info}>
							<h2>{t('components.homepage.header.query')}</h2>

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
