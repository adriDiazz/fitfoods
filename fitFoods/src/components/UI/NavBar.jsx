import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import FormProvider from '../HomePage/FormProvider';
import LanguageSelector from './LanguageSelector';
import ModalComponent from './ModalComponent';
import styles from './NavBar.module.css';
import LogoIcon from './Icons/LogoIcon';
import BurguerIcon from './Icons/BurguerIcon';
import { useTranslation } from 'react-i18next';
import { useUser } from '../../context/UserContext';
import MenuModal from '../MenuPage/MenuModal';
import { logOut } from '../../utils/services';

const NavBar = ({ mobile, setMobile }) => {
	const [opened, setOpened] = useState(false);
	const [menuModal, setMenuModal] = useState(false);
	const { userToken, getUserDataByJwt } = useUser();
	const { t } = useTranslation();

	const userData = getUserDataByJwt();
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
				<LogoIcon className={styles.fitlogo} />
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

					{userToken ? (
						<NavLink
							to='menus'
							className={({ isActive }) =>
								isActive ? styles.selected : styles.navLink
							}
						>
							{t('components.ui.navbar.menus')}
						</NavLink>
					) : (
						<a
							href=''
							className={styles.navLink}
							onClick={e => {
								e.preventDefault();
								setMenuModal(true);
							}}
						>
							{t('components.ui.navbar.menus')}
						</a>
					)}
				</ul>

				{userData ? (
					<>
						<div className={styles.user}>
							<p>{userData.name}</p>
						</div>

						<Button
							onClick={() => {
								logOut().then(() => {
									window.localStorage.removeItem('token');
									window.location.reload();
								});
							}}
						>
							LogOut
						</Button>
					</>
				) : (
					<Button onClick={() => setOpened(true)}>
						{t('components.ui.navbar.login')}
					</Button>
				)}

				<LanguageSelector />
			</nav>
			<div className={styles.greenLine}></div>
			<ModalComponent opened={opened} setOpened={setOpened}>
				<FormProvider />
			</ModalComponent>
			<ModalComponent opened={menuModal} setOpened={setMenuModal}>
				<MenuModal />
			</ModalComponent>
		</>
	);
};

export default NavBar;
