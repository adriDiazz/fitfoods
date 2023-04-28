import style from './IconsRow.module.css';
import { useTranslation } from 'react-i18next';

const IconsRow = () => {
	const { t } = useTranslation();
	return (
		<section>
			<div className={style.wrapper}>
				<div className={style.info}>
					<img src='gain.svg' alt='' />
					<h2>{t('components.homepage.iconsrow.gain')}</h2>
				</div>
				<div className={style.info}>
					<img src='eat.svg' alt='' />
					<h2>{t('components.homepage.iconsrow.eat')}</h2>
				</div>
				<div className={style.info}>
					<img src='plan.svg' alt='' />
					<h2>{t('components.homepage.iconsrow.plan')}</h2>
				</div>
			</div>
		</section>
	);
};

export default IconsRow;
