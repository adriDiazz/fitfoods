import Button from '../UI/Button';
import style from './LoginModal.module.css';
import LogoIcon from '../UI/Icons/LogoIcon';
import TwIcon from '../UI/Icons/TwIcon';
import InstaIcon from '../UI/Icons/InstaIcon';
import FaceBookIcon from '../UI/Icons/FaceBookIcon';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { login } from '../../utils/services';
import { useUser } from '../../context/UserContext';
import Input from '../UI/Input';
import { checkEmail, checkPassword } from '../../utils/inputErrors';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function LoginModal({ setFormState, setOpened }) {
	const { t } = useTranslation();
	const navigate = useNavigate();
	// const [userData, setUserData] = useState(null);
	const [error, setError] = useState(null);
	const [form, setForm] = useState({
		email: '',
		password: ''
	});

	const { userTokenChange, userData } = useUser();

	useEffect(() => {
		if (error === 'success') setOpened(false);
	}, [error]);

	const handleSubmit = async e => {
		e.preventDefault();
		const token = await login(form, setError);
		userTokenChange(token);
	};

	useEffect(() => {
		if (userData?.type === 1) {
			navigate('/admin');
		}
	}, [userData]);

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
					<Input
						type='text'
						placeholder='Email'
						value={form.email}
						onChange={e => setForm({ ...form, email: e.target.value })}
						error={checkEmail(form.email)}
					/>
					<Input
						type='password'
						placeholder='Password'
						value={form.password}
						onChange={e => setForm({ ...form, password: e.target.value })}
						error={checkPassword(form.password)}
					/>
					{error && <p className={style.error}>{error}</p>}
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
