import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ProvideText } from '../../context/Languaje';
import Button from './Button';
import FormProvider from './FormProvider';
import LanguageSelector from './LanguageSelector';
import LoginModal from './LoginModal';
import ModalComponent from './ModalComponent';
import styles from './NavBar.module.css';

const NavBar = ({ mobile, setMobile }) => {
	const [opened, setOpened] = useState(false);

	return (
		<>
			<nav className={styles.wrapper}>
				<img
					src='burguer.svg'
					alt=''
					className={styles.icon}
					onClick={() => setMobile(!mobile)}
				/>
				<img src='logo.svg' alt='fitfoods' className={styles.logo} />
				<ul className={styles.ul}>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? styles.selected : styles.navLink
						}
					>
						<ProvideText es='Inicio' en='Home' />
					</NavLink>
					<NavLink
						to='exercises'
						className={({ isActive }) =>
							isActive ? styles.selected : styles.navLink
						}
					>
						<ProvideText es='Ejercicios' en='Exercises' />
					</NavLink>
					<NavLink
						to='menus'
						className={({ isActive }) =>
							isActive ? styles.selected : styles.navLink
						}
					>
						<ProvideText es='Menús' en='Menus' />
					</NavLink>
				</ul>

				<Button onClick={() => setOpened(true)}>
					<ProvideText es='Inciar Sesion' en='Log In' />
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
