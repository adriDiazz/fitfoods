import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import FormProvider from './FormProvider';
import LanguageSelector from './LanguageSelector';
import ModalComponent from './ModalComponent';
import styles from './NavBar.module.css';
import LogoIcon from './Icons/LogoIcon';
import BurguerIcon from './Icons/BurguerIcon';
import { useTranslation } from 'react-i18next';

const NavBar = ({ mobile, setMobile }) => {
	const [opened, setOpened] = useState(false);
	const { t } = useTranslation();
	return (
		<>
			<nav className={styles.wrapper}>
				<BurguerIcon
					src='burguer.svg'
					alt=''
					className={styles.icon}
					onClick={() => setMobile(!mobile)}
				/>
				{/* <img src='logo.svg' alt='fitfoods' className={styles.logo} /> */}
				<LogoIcon />
				<ul className={styles.ul}>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? styles.selected : styles.navLink
						}
					>
						{t('components.ui.navbar.home')}
					</NavLink>
					<NavLink
						to='exercises'
						className={({ isActive }) =>
							isActive ? styles.selected : styles.navLink
						}
					>
						{t('components.ui.navbar.exercises')}
					</NavLink>
					<NavLink
						to='menus'
						className={({ isActive }) =>
							isActive ? styles.selected : styles.navLink
						}
					>
						{t('components.ui.navbar.menus')}
					</NavLink>
				</ul>

				<Button onClick={() => setOpened(true)}>
					{t('components.ui.navbar.login')}
				</Button>
				<LanguageSelector />
			</nav>
			<div className={styles.greenLine}></div>
			<ModalComponent opened={opened} setOpened={setOpened}>
				<FormProvider />
			</ModalComponent>
		</>
	);
};

export default NavBar;
