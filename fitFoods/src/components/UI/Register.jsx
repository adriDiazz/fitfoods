import { NavLink } from 'react-router-dom';
import styles from './Login.module.css';
import { useTranslation } from 'react-i18next';

const Register = () => {
	const { t } = useTranslation();
	return (
		<section>
			<div id={styles.contenedor}>
				<div className={styles.titulo}>{t('components.ui.login.start')}</div>
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
								{t('components.ui.login.here')}
							</button>
						</form>
					</div>
					<div className={styles.inferior}>
						<NavLink to='/'>{t('components.ui.login.back')}</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
