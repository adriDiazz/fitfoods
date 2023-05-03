import Button from './Button';
import style from './RegisterModal.module.css';
import { useTranslation } from 'react-i18next';

function RegisterModal({ setFormState }) {
	const { t } = useTranslation();
	return (
		<div className={style.wrapper}>
			<div className={style.left}>
				<h2>{t('components.ui.login.start')}</h2>
				<div className={style.social}>
					<img src='instagram.svg' alt='' />
					<img src='twitter.svg' alt='' />
					<img src='facebook.svg' alt='' />
				</div>
			</div>
			<div className={style.right}>
				<img src='logo.svg' alt='fitfoods' />
				<form>
					<input type='text' placeholder='Email' />
					<input type='password' placeholder='Password' />
					<input type='password' placeholder='Confirm Password' />
					<p>
						{t('components.ui.login.already')}
						<span onClick={() => setFormState('login')}>
							{t('components.ui.login.login')}
						</span>
					</p>
					<Button>{t('components.ui.login.here')}</Button>
				</form>
			</div>
		</div>
	);
}

export default RegisterModal;
