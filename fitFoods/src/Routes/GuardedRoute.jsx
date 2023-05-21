import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import jwtDecode from 'jwt-decode';

const GuardedRoute = ({ redirectRoute = '/' }) => {
	const { userToken } = useUser();
	let decodedToken = null;
	const currentDate = new Date();

	if (userToken) {
		decodedToken = jwtDecode(userToken);
	}

	return userToken &&
		decodedToken.exp * 1000 >= currentDate.getTime() &&
		decodedToken.user ? (
		<Outlet />
	) : (
		<Navigate to={redirectRoute} replace />
	);
};

export default GuardedRoute;
