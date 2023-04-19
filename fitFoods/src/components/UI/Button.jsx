import style from './Button.module.css';

const Button = ({ className, ...props }) => {
	return (
		<button {...props} className={`${style.button} ${className}`}></button>
	);
};

export default Button;
