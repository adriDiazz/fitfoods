import Button from '../UI/Button';
import style from './RegisterModal.module.css';
import Input from '../UI/Input';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { register } from '../../utils/services';
import { checkEmail, checkPassword, checkBlank, checkPasswordMatch } from '../../utils/inputErrors';
import { useUser } from '../../context/UserContext';

function RegisterModal({ setFormState, setOpened }) {
	const { t } = useTranslation();
	const [error, setError] = useState(null);

	const [form, setForm] = useState({
		name: '',
		username: '',
		email: '',
		password: '',
		password_confirmation: '',
		type: 0
	});
	const { userTokenChange } = useUser();

	useEffect(() => {
		if (error === 'success') setOpened(false);
	}, [error]);

	const handleSubmit = async e => {
		e.preventDefault();

		const token = await register(form, setError);
		userTokenChange(token);
	};
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
					<Input
						type='text'
						placeholder='Name'
						value={form.name}
						onChange={e => setForm({ ...form, name: e.target.value })}
						error={checkBlank(form.name)}
					/>
					<Input
						type='text'
						placeholder='Username'
						value={form.username}
						onChange={e => setForm({ ...form, username: e.target.value })}
						error={checkBlank(form.username)}
					/>
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
					<Input
						type='password'
						placeholder='Confirm Password'
						onChange={e =>
							setForm({ ...form, password_confirmation: e.target.value })
						}
						error={checkPassword(form.password_confirmation) && checkPasswordMatch(form.password, form.password_confirmation)}
					/>
					{error && <p className={style.error}>{error}</p>}
					<p>
						{t('components.ui.login.already')}
						<span onClick={() => setFormState('login')}>
							{t('components.ui.login.login')}
						</span>
					</p>
					<Button
						onClick={handleSubmit}
						disabled={
							checkEmail(form.email) ||
							checkPassword(form.password) ||
							checkPassword(form.password_confirmation) ||
							!form.email ||
							!form.password ||
							!form.password_confirmation
						}
					>
						{t('components.ui.login.here')}
					</Button>
				</form>
			</div>
		</div>
	);
}

export default RegisterModal;
