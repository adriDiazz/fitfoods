import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import Button from './UI/Button';

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
						Home
					</NavLink>
					<NavLink
						to='exercises'
						className={({ isActive }) =>
							isActive ? styles.selected : styles.navLink
						}
					>
						Exercises
					</NavLink>
					<NavLink
						to='menus'
						className={({ isActive }) =>
							isActive ? styles.selected : styles.navLink
						}
					>
						Menus
					</NavLink>
				</ul>
				<Button>Log in</Button>
			</nav>
			<div className={styles.greenLine}></div>
		</>
	);
};

export default NavBar;
