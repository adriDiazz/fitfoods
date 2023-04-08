import { ProvideText } from '../../context/Languaje';
import Button from './Button';
import style from './LoginModal.module.css';
import LogoIcon from './Icons/LogoIcon';
import TwIcon from './Icons/TwIcon';
import InstaIcon from './Icons/InstaIcon';
import FaceBookIcon from './Icons/FaceBookIcon';

// eslint-disable-next-line react/prop-types
function LoginModal({ setFormState }) {
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
						<ProvideText es='¿No tienes cuenta?' en="Don't have an account?" />
						<span onClick={() => setFormState('register')}>
							<ProvideText es='  Registrate aqui' en='  Sign Up here' />
						</span>
					</p>
					<Button>
						<ProvideText es='Iniciar Sesión' en='Log In' />
					</Button>
				</form>
			</div>
		</div>
	);
}

export default LoginModal;
