import { NavLink } from 'react-router-dom';
import { ProvideText } from '../../context/Languaje';
import LanguageSelector from './LanguageSelector';
import styles from './NavBar.module.css';

const NavBar = () => {
	return (
		<>
			<nav className={styles.wrapper}>
				<img src='logo.svg' alt='fitfoods' />
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
				<NavLink
					to='register'
					className={({ isActive }) =>
						isActive ? styles.selected : styles.navLink
					}
				>
					<ProvideText es='Registro' en='Register' />
				</NavLink>
				<NavLink
					to='login'
					className={({ isActive }) =>
						isActive ? styles.selected : styles.navLink
					}
				>
					<ProvideText es='Acceso' en='Log In' />
				</NavLink>
				<LanguageSelector />
			</nav>
			<div className={styles.greenLine}></div>
		</>
	);
};

export default NavBar;
