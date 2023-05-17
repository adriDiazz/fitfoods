import { useState, createContext, useContext } from 'react';
import jwtDecode from 'jwt-decode';

export const UserContext = createContext({});

/* eslint-disable react/prop-types */
export function UserProvider({ children }) {
	const user = window.localStorage.getItem('token') || null;
	const [userToken, setUserToken] = useState(user || null);

	const provider = {
		userToken,
		userTokenChange: selected => {
			const newToken = selected || null;
			setUserToken(newToken);
			window.localStorage.setItem('token', newToken);
		},
		getUserDataByJwt: () => {
			if (userToken && userToken !== 'null') {
				const decoded = jwtDecode(userToken);
				return decoded.user;
			}
			return null;
		}
	};

	return (
		<UserContext.Provider value={provider}>{children}</UserContext.Provider>
	);
}

export function useUser() {
	const userContext = useContext(UserContext);
	return userContext;
}
