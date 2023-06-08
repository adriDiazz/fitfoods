import { useState } from 'react';
import style from './MenuPage.module.css';
import { useTranslation } from 'react-i18next';
import MenuNavbar from '../components/MenuPage/MenuNavbar';
import CreateMenu from '../components/MenuPage/CreateMenu';
import ViewMenus from '../components/MenuPage/ViewMenus';

const MenuPage = ({ setMobile }) => {
	const { t } = useTranslation();
	const [page, setPage] = useState('create');

	return (
		<div>
			<h2 className={style.titulo}>
				{t('components.menupage.page.autopilot')}
			</h2>
			<MenuNavbar setPage={setPage} page={page} />
			{page === 'create' && <CreateMenu setMobile={setMobile} />}
			{page === 'view' && <ViewMenus setMobile={setMobile} />}
		</div>
	);
};

export default MenuPage;
