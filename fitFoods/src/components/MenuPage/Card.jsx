import style from './Card.module.css';

// eslint-disable-next-line react/prop-types
const Card = ({ name, type, calories, url, grams }) => {
	return (
		<div>
			<div className={style.rectanguloreceta}>
				<h2 className={style.typemeal}>{type}</h2>
				<span className={style.caloriesmeal}>
					{Math.round((calories * grams) / 100)} Calorías
				</span>
				<div className={style.informacion}>
					<img className={style.imagen} src={url}></img>
					<p className={style.nombrereceta}> {name}</p>
					<p className={style.cantidad}>{grams} Grams</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
