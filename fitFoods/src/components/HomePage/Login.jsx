import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Login.module.css';

const Login = () => {
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
								{t('components.ui.login.login')}
							</button>
						</form>
						<div className={styles.pieform}>
							<NavLink to='/Register'>
								{t('components.ui.login.register')}
							</NavLink>
						</div>
					</div>
					<div className={styles.inferior}>
						<NavLink to='/'>{t('components.ui.login.back')}</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
