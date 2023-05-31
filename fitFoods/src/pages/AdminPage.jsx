import style from './AdminPage.module.css';
import AdminNavBar from '../components/AdminPage/AdminNavBar';
import { useState } from 'react';
import Dashboard from '../components/AdminPage/Dashboard';
import Comments from '../components/AdminPage/Comments';
import Users from '../components/AdminPage/Users';
const AdminPage = () => {
	const [page, setPage] = useState('dashboard');

	
	return (
		<div className={style.wrapper}>
			<div className={style.infoWrapper}>
				<AdminNavBar setPage={setPage} page={page} />
				{page === 'dashboard' && <Dashboard />}
				{page === 'users' && <Users />}
				{page === 'comments' &&  <Comments />}
				
			</div>
		</div>
	);
};

export default AdminPage;
