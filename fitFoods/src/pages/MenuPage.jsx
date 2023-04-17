import { useEffect, useState } from 'react';
import style from './MenuPage.module.css';
import Button from '../components/UI/Button';
import Card from '../components/MenuPage/Card';
import { fetchFood } from '../utils/services';

const MenuPage = () => {
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

	const handleInput = e => {
		setCalories(e.target.value);
	};

	useEffect(() => {
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
			console.log(sortedArr);
			setMenu(menu => [...menu, ...sortedArr]);
		}
	}, [food]);
	if (isClicked && food.error) {
		return <div>Error: {food.error.message}</div>;
	}
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
						onChange={handleInput}
					></input>
				</div>
				<div className={style.buttondiv}>
					{' '}
					<Button onClick={handleMenu}>Get your Menu</Button>
				</div>
				<p className={style.titulomenu}>Menú plan for today</p>
				{isClicked && food.loading ? (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '90vh',
							width: '90vw'
						}}
					>
						<div className='lds-ring'>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				) : menu.length > 0 ? (
					menu.map(m => {
						let percentage = 0;
						if (m.type === 'breakfast') {
							percentage = 0.2;
						}
						if (m.type === 'lunch') {
							percentage = 0.4;
						}
						if (m.type === 'dinner') {
							percentage = 0.3;
						}
						if (m.type === 'snack') {
							percentage = 0.1;
						}
						const grams = (calories * percentage * 100) / m.calories;
						return (
							<Card
								key={m.id}
								name={m.name}
								type={m.type}
								calories={m.calories}
								url={m.url.replace('"', '')}
								grams={Math.round(grams)}
							/>
						);
					})
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default MenuPage;
