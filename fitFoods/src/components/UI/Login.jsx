import { NavLink } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
	return (
		<section>
			<div id={styles.contenedor}>
				<div className={styles.titulo}>START TRAINING WITH US</div>
				<div id={styles.central}>
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
							<a href='#'>¿Perdiste tu contraseña?</a>
							<a href='#'>¿No tienes Cuenta? Registrate</a>
						</div>
					</div>
					<div className={styles.inferior}>
						<NavLink to='/'>Volver</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
