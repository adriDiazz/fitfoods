import { useEffect, useState } from 'react';
import style from './CreateMenu.module.css';
import Button from '../UI/Button';
import Card from '../MenuPage/Card';
import Loader from '../UI/Loader';
import { useFetch } from '../../hooks/useFetch';
import { getMenu } from '../../utils/utils';
import { addMenu } from '../../utils/services';
import { useUser } from '../../context/UserContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const CreateMenu = ({ setMobile }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { userToken, userData } = useUser();
	const [menu, setMenu] = useState([]);
	const [isClicked, setIsClicked] = useState(false);
	const [calories, setCalories] = useState();
	const { data, loading, error } = useFetch(
		import.meta.env.VITE_FOODS_URL,
		isClicked
	);

	useEffect(() => {
		if (!userToken) {
			navigate('/');
		}
	}, [userToken]);

	useEffect(() => {
		setMobile(false);
		setMenu([]);
		getMenu(data, setMenu, calories);
	}, [data]);

	if (isClicked && error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div>
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
						onChange={e => setCalories(e.target.value)}
					></input>
				</div>
				<div className={style.buttondiv}>
					{' '}
					<Button onClick={() => setIsClicked(true)}>
						{t('components.menupage.page.generate')}
					</Button>
				</div>
				<p className={style.titulomenu}>
					{t('components.menupage.page.plan')} {calories}{' '}
					{t('components.menupage.card.calories')}
				</p>
				{isClicked && loading ? (
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
							<Button
								onClick={() => {
									addMenu({ name: 'Prueba', user_id: userData.id, food: menu });
								}}
								className={style.btn}
							>
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

export default CreateMenu;
