import { useState, createContext, useContext, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

export const UserContext = createContext({});

/* eslint-disable react/prop-types */
export function UserProvider({ children }) {
	const user = window.localStorage.getItem('token') || null;
	const [userToken, setUserToken] = useState(user || null);
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		if (userToken && userToken !== 'null') {
			const decoded = jwtDecode(userToken);
			setUserData(decoded.user);
		} else {
			setUserData(null);
		}
	}, [userToken]);

	const provider = {
		userToken,
		userData,
		userTokenChange: selected => {
			let newToken = selected || null;

			// check if expired
			if (newToken) {
				const decoded = jwtDecode(newToken);

				const currentDate = new Date();
				if (decoded.exp * 1000 < currentDate.getTime()) {
					newToken = null;
				}
			}

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
