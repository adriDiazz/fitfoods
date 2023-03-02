import { NavLink } from 'react-router-dom';
import styles from './Login.module.css';

const Register = () => {
	return (
		<section>
			<div id={styles.contenedor}>
				<div id={styles.central}>
					<div id={styles.login}>
						<div className={styles.titulo}>Bienvenido</div>
						<form id={styles.loginform}>
							<input
								type='text'
								name='email'
								placeholder='Email'
								required
							></input>
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
								Register
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

export default Register;
