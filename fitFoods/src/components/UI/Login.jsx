import styles from './Login.module.css';

const Login = () => {
	return (
		<section>
			<div id={styles.contenedor}>
				<div id={styles.central}>
					<div id={styles.login}>
						<div className={styles.titulo}>Bienvenido</div>
						<form id={styles.loginform}>
							<input
								type='text'
								name='usuario'
								placeholder='Usuario'
								required
							></input>
							<input
								type='password'
								placeholder='Contraseña'
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
						<a href='#'>Volver</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
