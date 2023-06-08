import { useEffect, useState } from 'react';
import style from './ViewMenus.module.css';
import Card from '../MenuPage/Card';
import Loader from '../UI/Loader';
import { fetchFood, getAllMenus } from '../../utils/services';
import { useUser } from '../../context/UserContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ViewMenus = ({ setMobile }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { userToken, userData } = useUser();
	const [menus, setMenus] = useState([]);
	const [fullMenus, setFullMenus] = useState([]);
	const [loading, setLoading] = useState(true);
	const [food, setFood] = useState([]);
	useEffect(() => {
		if (!userToken) {
			navigate('/');
		}
	}, [userToken]);

	useEffect(() => {
		setMobile(false);
		getAllMenus({ user_id: userData.id }, setMenus).then(() => {
			setLoading(false);
		});
		fetchFood(setFood);
	}, []);

	useEffect(() => {
		if (menus?.length > 0) {
			menus.forEach(men => {
				men.forEach(m => {
					food?.data.forEach(f => {
						if (m.food_id === f.id) {
							m.name = f.name;
							m.url = f.url.replace('"', '');
							m.type = f.type;
							m.calories = f.calories;
						}
					});
				});
			});
			setFullMenus(menus);
			console.log(fullMenus);
		}
	}, [food]);
	return (
		<div>
			<div className={style.rectangulo}>
				{loading ? (
					<Loader />
				) : menus.length > 0 ? (
					fullMenus && (
						<div>
							{fullMenus.map((men, index) => {
								return (
									<div key={index}>
										<h3 className={style.titulocalorias}>Menu {index + 1}</h3>
										{men.map(m => {
											console.log(m);
											return (
												<Card
													key={m.id}
													name={m.name}
													type={m.type}
													calories={m.calories}
													url={m.url}
													grams={m.grams}
												/>
											);
										})}
									</div>
								);
							})}
						</div>
					)
				) : (
					<div>
						<h3 className={style.nomenus}>No hay menus guardados</h3>
					</div>
				)}
			</div>
		</div>
	);
};

export default ViewMenus;
