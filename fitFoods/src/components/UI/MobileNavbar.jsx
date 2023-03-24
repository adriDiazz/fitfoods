import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ProvideText } from '../../context/Languaje';
import style from './MobileNavbar.module.css';

function MobileNavbar() {
	return (
		<div className={style.wrapper}>
			<ul className={style.ul}>
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? style.selected : style.navLink
					}
				>
					<ProvideText es='Inicio' en='Home' />
				</NavLink>
				<NavLink
					to='exercises'
					className={({ isActive }) =>
						isActive ? style.selected : style.navLink
					}
				>
					<ProvideText es='Ejercicios' en='Exercises' />
				</NavLink>
				<NavLink
					to='menus'
					className={({ isActive }) =>
						isActive ? style.selected : style.navLink
					}
				>
					<ProvideText es='Menús' en='Menus' />
				</NavLink>
			</ul>
		</div>
	);
}

export default MobileNavbar;
