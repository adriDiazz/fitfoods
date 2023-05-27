import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import jwtDecode from 'jwt-decode';

const GuardedRoute = ({ routeType = 0, redirectRoute = '/' }) => {
	const { userToken } = useUser();
	let decodedToken = null;
	const currentDate = new Date();

	if (userToken) {
		decodedToken = jwtDecode(userToken);
	}

	return userToken &&
		decodedToken.exp * 1000 >= currentDate.getTime() &&
		decodedToken.user &&
		decodedToken.user.type >= routeType ? (
		<Outlet />
	) : (
		<Navigate to={redirectRoute} replace />
	);
};

export default GuardedRoute;
