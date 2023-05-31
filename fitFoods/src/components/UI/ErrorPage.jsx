import { NavLink } from 'react-router-dom';
import Button from './Button';
import style from './ErrorPage.module.css';

const ErrorPage = () => {
	return (
		<div>
			<div className={style.ErrorPage}>
				<h1>404</h1>
				<h2>La pagina que buscabas no ha sido encontrada!</h2>
				<Button>
					<NavLink to='/'>Regresar</NavLink>
				</Button>
			</div>
		</div>
	);
};

export default ErrorPage;
