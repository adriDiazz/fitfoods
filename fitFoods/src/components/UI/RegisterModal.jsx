import { useState } from 'react';
import { ProvideText } from '../../context/Languaje';
import Button from './Button';
import style from './RegisterModal.module.css';

function RegisterModal({ setFormState }) {
	return (
		<div className={style.wrapper}>
			<div className={style.left}>
				<h2>
					<ProvideText
						es='Inicia tu entrenamiento con nosotros'
						en='Start Training with us'
					/>
				</h2>
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
						<ProvideText es='¿Ya tienes cuenta?' en='Have an account?' />
						<span onClick={() => setFormState('login')}>
							<ProvideText es='  Inicia sesion aqui' en='  Log In here' />
						</span>
					</p>
					<Button>
						<ProvideText es='Registrarse' en='Register' />
					</Button>
				</form>
			</div>
		</div>
	);
}

export default RegisterModal;
