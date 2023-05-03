import { useState } from 'react';
import style from './Card.module.css';
import { classifyRecipe } from '../../utils/services';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line react/prop-types
const Card = ({ name, type, calories, url, grams }) => {
	const { t } = useTranslation();
	const [recipeClass, setRecipeClass] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const handleClassify = () => {
		setIsLoading(true);
		classifyRecipe(
			{ algorithm: 'Random Forest', title: name },
			setRecipeClass,
			setIsLoading
		);
	};
	return (
		<div>
			<div className={style.rectanguloreceta}>
				<h2 className={style.typemeal}>{type}</h2>
				<span className={style.caloriesmeal}>
					{Math.round((calories * grams) / 100)}{' '}
					{t('components.menupage.card.calories')}
				</span>
				<div className={style.informacion}>
					<img className={style.imagen} src={url}></img>
					<p className={style.nombrereceta}> {name}</p>
					<p className={style.cantidad}>
						{grams} {t('components.menupage.card.grams')}
					</p>
					<button className={style.button} onClick={handleClassify}>
						{t('components.menupage.card.classify')}
					</button>
				</div>

				{isLoading ? (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '0vh',
							width: '20vh'
						}}
					>
						<div className={style.classLdsRing}>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				) : (
					<span className={style.caloriesmeal}>{recipeClass}</span>
				)}
			</div>
		</div>
	);
};

export default Card;
