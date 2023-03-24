import style from './Card.module.css';

const Card = () => {
	return (
		<div>
			<div className={style.rectanguloreceta}>
				<h2 className={style.typemeal}>Breakfast</h2>
				<span className={style.caloriesmeal}>200 Calorias</span>
				<div className={style.informacion}>
					<img className={style.imagen}></img>
					<p className={style.nombrereceta}> Avocado & Smoked Salmon Omelet</p>
					<p className={style.cantidad}>1</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
