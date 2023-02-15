import style from './Button.module.css';

const Button = props => {
	return <button {...props} className={style.button}></button>;
};

export default Button;
