import style from './MenuNavbar.module.css';
import { useTranslation } from 'react-i18next';

const MenuNavbar = ({ setPage, page }) => {
	const { t } = useTranslation();

	return (
		<div
			style={{
				width: '100%',
				padding: '1rem'
			}}
		>
			<ul className={style.wrapper}>
				<li
					className={page === 'create' ? style.active : ''}
					onClick={() => setPage('create')}
				>
					{t('components.menupage.page.create')}
				</li>
				<li
					className={page === 'view' ? style.active : ''}
					onClick={() => setPage('view')}
				>
					{t('components.menupage.page.mymenus')}
				</li>
			</ul>
			<div className={style.line}></div>
		</div>
	);
};

export default MenuNavbar;
