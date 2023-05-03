import { NavLink } from 'react-router-dom';
import style from './MobileNavbar.module.css';
import { useTranslation } from 'react-i18next';

function MobileNavbar() {
	const { t } = useTranslation();
	return (
		<div className={style.wrapper}>
			<ul className={style.ul}>
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? style.selected : style.navLink
					}
				>
					{t('components.ui.navbar.home')}
				</NavLink>
				<NavLink
					to='exercises'
					className={({ isActive }) =>
						isActive ? style.selected : style.navLink
					}
				>
					{t('components.ui.navbar.exercises')}
				</NavLink>
				<NavLink
					to='menus'
					className={({ isActive }) =>
						isActive ? style.selected : style.navLink
					}
				>
					{t('components.ui.navbar.menus')}
				</NavLink>
			</ul>
		</div>
	);
}

export default MobileNavbar;
