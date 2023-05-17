import { useEffect, useState } from 'react';
import style from './MenuPage.module.css';
import Button from '../components/UI/Button';
import Card from '../components/MenuPage/Card';
import { addMenu, fetchFood } from '../utils/services';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Loader from '../components/UI/Loader';
import { getMenu } from '../utils/utils';

const MenuPage = ({ setMobile }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [food, setFood] = useState({
		loading: true,
		data: [],
		error: null
	});
	const [menu, setMenu] = useState([]);
	const [isClicked, setIsClicked] = useState(false);
	const [calories, setCalories] = useState();
	const handleMenu = () => {
		fetchFood(setFood);
		setIsClicked(true);
	};

	const { userToken } = useUser();

	const handleInput = e => {
		setCalories(e.target.value);
	};

	const handleSave = () => {
		addMenu({ name: 'Prueba', user_id: 1, food: menu });
	};

	useEffect(() => {
		if (!userToken) {
			navigate('/');
		}
	}, [userToken]);

	useEffect(() => {
		setMobile(false);
		setMenu([]);
		getMenu(food, setMenu, calories);
	}, [food]);

	if (isClicked && food.error) {
		return <div>Error: {food.error.message}</div>;
	}

	return (
		<div>
			<h2 className={style.titulo}>
				{t('components.menupage.page.autopilot')}
			</h2>
			<div className={style.rectangulo}>
				<h3 className={style.titulocalorias}>
					{t('components.menupage.page.calories')}
				</h3>
				<div className={style.input}>
					{' '}
					<input
						className={style.inputcalorias}
						type='text'
						name='calories'
						placeholder='#### Calories'
						onChange={handleInput}
					></input>
				</div>
				<div className={style.buttondiv}>
					{' '}
					<Button onClick={handleMenu}>
						{t('components.menupage.page.generate')}
					</Button>
				</div>
				<p className={style.titulomenu}>
					{t('components.menupage.page.plan')} {calories}{' '}
					{t('components.menupage.card.calories')}
				</p>
				{isClicked && food.loading ? (
					<Loader />
				) : menu.length > 0 ? (
					<div>
						{menu.map(m => {
							return (
								<Card
									key={m.id}
									name={m.name.replace('"', '')}
									type={m.type}
									calories={m.calories}
									url={m.url.replace('"', '')}
									grams={m.grams}
								/>
							);
						})}
						<div className={style.btnWrapper}>
							<Button onClick={handleSave} className={style.btn}>
								{t('components.menupage.page.save')}
							</Button>
						</div>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default MenuPage;
