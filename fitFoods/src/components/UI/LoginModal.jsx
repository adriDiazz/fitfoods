import Button from './Button';
import style from './LoginModal.module.css';
import LogoIcon from './Icons/LogoIcon';
import TwIcon from './Icons/TwIcon';
import InstaIcon from './Icons/InstaIcon';
import FaceBookIcon from './Icons/FaceBookIcon';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
function LoginModal({ setFormState }) {
	const { t } = useTranslation();
	return (
		<div className={style.wrapper}>
			<div className={style.left}>
				<h2>{t('components.ui.login.start')}</h2>
				<div className={style.social}>
					{/* <img src='instagram.svg' alt='' /> */}
					<InstaIcon />
					{/* <img src='twitter.svg' alt='' /> */}
					<TwIcon />
					{/* <img src='facebook.svg' alt='' /> */}
					<FaceBookIcon />
				</div>
			</div>
			<div className={style.right}>
				{/* <img src='logo.svg' alt='fitfoods' /> */}
				<LogoIcon />
				<form>
					<input type='text' placeholder='Email' />
					<input type='password' placeholder='Password' />
					<p>
						{t('components.ui.login.register')}
						<span onClick={() => setFormState('register')}>
							{t('components.ui.login.here')}
						</span>
					</p>
					<Button>{t('components.ui.login.login')}</Button>
				</form>
			</div>
		</div>
	);
}

export default LoginModal;
