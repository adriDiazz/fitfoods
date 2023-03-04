import { NavLink } from 'react-router-dom';
import { ProvideText } from '../../context/Languaje';
import styles from './Login.module.css';

const Register = () => {
	return (
		<section>
			<div id={styles.contenedor}>
				<div className={styles.titulo}>
					<ProvideText
						es='EMPIEZA A ENTRENAR CON NOSOTROS'
						en='START TRAINING WITH US'
					/>
				</div>
				<div id={styles.central}>
					<img src='logo.svg' alt='fitfoods' />
					<div id={styles.login}>
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
								<ProvideText es='Registrar' en='Register' />
							</button>
						</form>
					</div>
					<div className={styles.inferior}>
						<NavLink to='/'>
							<ProvideText es='Volver' en='Back' />
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
