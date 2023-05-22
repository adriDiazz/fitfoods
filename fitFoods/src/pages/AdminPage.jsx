import style from './AdminPage.module.css';
import AdminNavBar from '../components/AdminPage/AdminNavBar';
import { useState } from 'react';
import Dashboard from '../components/AdminPage/Dashboard';

const AdminPage = () => {
	const [page, setPage] = useState('dashboard');

	return (
		<div className={style.wrapper}>
			<div className={style.infoWrapper}>
				<AdminNavBar setPage={setPage} page={page}/>
				{page === 'dashboard' && <Dashboard />}
				{page === 'users' && <h1>Users</h1>}
				{page === 'comments' && <h1>Comments</h1>}
			</div>
		</div>
	);
};

export default AdminPage;
