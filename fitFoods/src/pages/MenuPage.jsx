import style from './MenuPage.module.css';
import Button from '../components/UI/Button';
import Card from '../components/MenuPage/Card';

const MenuPage = () => {
	return (
		<div>
			<h2 className={style.titulo}>Put your diet on autopilot</h2>
			<div className={style.rectangulo}>
				<h3 className={style.titulocalorias}>Calories you want to eat</h3>
				<div className={style.input}>
					{' '}
					<input
						className={style.inputcalorias}
						type='text'
						name='calories'
						placeholder='#### Calories'
					></input>
				</div>
				<div className={style.buttondiv}>
					{' '}
					<Button>Get your Menu</Button>
				</div>
				<p className={style.titulomenu}>Menú plan for today: 3014 calories</p>
				<Card />
			</div>
		</div>
	);
};

export default MenuPage;
