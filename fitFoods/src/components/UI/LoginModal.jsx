import Button from './Button';
import style from './LoginModal.module.css';
import LogoIcon from './Icons/LogoIcon';
import TwIcon from './Icons/TwIcon';
import InstaIcon from './Icons/InstaIcon';
import FaceBookIcon from './Icons/FaceBookIcon';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { login } from '../../utils/services';
import { useUser } from '../../context/UserContext';

// eslint-disable-next-line react/prop-types
function LoginModal({ setFormState }) {
	const { t } = useTranslation();
	const [form, setForm] = useState({
		email: '',
		password: ''
	});

	const { userTokenChange } = useUser();

	const handleSubmit = async e => {
		e.preventDefault();
		const token = await login(form);
		userTokenChange(token);
	};

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
					<input
						type='text'
						placeholder='Email'
						value={form.email}
						onChange={e => setForm({ ...form, email: e.target.value })}
					/>
					<input
						type='password'
						placeholder='Password'
						value={form.password}
						onChange={e => setForm({ ...form, password: e.target.value })}
					/>
					<p>
						{t('components.ui.login.register')}
						<span onClick={() => setFormState('register')}>
							{t('components.ui.login.here')}
						</span>
					</p>
					<Button onClick={handleSubmit}>
						{t('components.ui.login.login')}
					</Button>
				</form>
			</div>
		</div>
	);
}

export default LoginModal;
