import { Link, NavLink } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
	return (
		<section>
			<div id={styles.contenedor}>
				<div className={styles.titulo}>START TRAINING WITH US</div>
				<div id={styles.central}>
					<img src='logo.svg' alt='fitfoods' />
					<div id={styles.login}>
						<form id={styles.loginform}>
							<input
								type='text'
								name='usuario'
								placeholder='Username'
								required
							></input>
							<input
								type='password'
								placeholder='Password'
								name='password'
								required
							></input>
							<button type='submit' title='Ingresar' name='Ingresar'>
								Login
							</button>
						</form>
						<div className={styles.pieform}>
							<NavLink to='/Register'>
								Don´t you have an account? Register
							</NavLink>
						</div>
					</div>
					<div className={styles.inferior}>
						<NavLink to='/'>Back</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
