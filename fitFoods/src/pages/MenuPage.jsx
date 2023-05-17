import { useEffect, useState } from 'react';
import style from './MenuPage.module.css';
import Button from '../components/UI/Button';
import Card from '../components/MenuPage/Card';
import { addMenu, fetchFood } from '../utils/services';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Loader from '../components/UI/Loader';

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
		if (food.data.length > 0) {
			function shuffleArray(array) {
				for (let i = array.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[array[i], array[j]] = [array[j], array[i]];
				}
			}
			shuffleArray(food.data);
			let nBreakfast = 2;
			let nLunch = 2;
			let nDinner = 2;
			let nSnack = 1;
			let i = 0;
			const fArray = { breakfast: [], lunch: [], dinner: [], snack: [] };
			while (nBreakfast > 0 || nLunch > 0 || nDinner > 0 || nSnack > 0) {
				const fAdd = food.data[i];
				if (nBreakfast > 0 && fAdd.type === 'breakfast') {
					fArray.breakfast.push(fAdd);
					nBreakfast -= 1;
				}
				if (nLunch > 0 && fAdd.type === 'lunch') {
					fArray.lunch.push(fAdd);
					nLunch -= 1;
				}
				if (nDinner > 0 && fAdd.type === 'dinner') {
					fArray.dinner.push(fAdd);
					nDinner -= 1;
				}
				if (nSnack > 0 && fAdd.type === 'snack') {
					fArray.snack.push(fAdd);
					nSnack -= 1;
				}
				i++;
			}
			const sortedArr = [];
			fArray.breakfast.forEach(element => {
				sortedArr.push(element);
			});

			fArray.lunch.forEach(element => {
				sortedArr.push(element);
			});
			fArray.dinner.forEach(element => {
				sortedArr.push(element);
			});
			fArray.snack.forEach(element => {
				sortedArr.push(element);
			});

			sortedArr.map(e => {
				let percentage = 0;
				if (e.type === 'breakfast') {
					percentage = 0.2 / 2;
				}
				if (e.type === 'lunch') {
					percentage = 0.4 / 2;
				}
				if (e.type === 'dinner') {
					percentage = 0.3 / 2;
				}
				if (e.type === 'snack') {
					percentage = 0.1;
				}

				e.grams = Math.round((calories * percentage * 100) / e.calories);
				return e;
			});
			setMenu(menu => [...menu, ...sortedArr]);
		}
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
